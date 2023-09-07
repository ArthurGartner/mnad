const axios = require("axios");
const MongoClient = require("mongodb").MongoClient;
const AWS = require("aws-sdk");
const comprehend = new AWS.Comprehend();

exports.handler = async (event) => {
  // Get MongoDB URI and RapidAPI key from environment variables
  const MONGODB_URI = process.env.MONGODB_URI;
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
  const OPENAI_KEY = process.env.OPENAI_API_KEY;

  // Connect to MongoDB
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db("mnad");
  const daysCollection = db.collection("days");

  try {
    // Make GET request to Bing News Search API
    const response = await axios.get(
      "https://bing-news-search1.p.rapidapi.com/news",
      {
        headers: {
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-bingapis-sdk": "true",
        },
      }
    );

    const newsData = response.data;
    const articles = [];

    var sentimentSum = 0;

    // Iterate through each news object
    for (const news of newsData.value) {
      var params = {
        LanguageCode: "en",
        Text: news.name + " " + news.description,
      };

      const result = await comprehend.detectSentiment(params).promise();

      const Positive = result.SentimentScore.Positive;
      const Negative = result.SentimentScore.Negative;
      const Neutral = result.SentimentScore.Neutral;
      const Mixed = result.SentimentScore.Mixed;

      const cheerfulScore = Math.round(
        ((Positive - Negative) * (1 - Mixed) + Neutral * Mixed + 1) * 50
      );

      //Get category
      const prompt = `Headline: ${news.name}\nDescription: ${news.description}\n\nBased on the above headline and description, please categorize this news article into one of the following categories:\n\n- Politics\n- World\n- Business\n- Technology\n- Science\n- Health\n- Sports\n- Entertainment\n- Travel\n- Education\n- Environment\n- Culture\n- Automotive\n- Food & Drink\n- Fashion\n- Real Estate\n- Opinion\n- Religion\n- Lifestyle\n- Local News\n- Law & Crime\n- Weather\n- Aerospace & Defense\n- Arts\n- Finance\n- Human Rights\n- Social Issues\n\nCategory:`;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
      };

      const data = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
      };

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        data,
        config
      );

      const category =
        response.data.choices[0].message?.content ||
        response.data.choices[0].text.trim();

      const article = {
        headline: news.name,
        description: news.description,
        thumbnail: news.image?.thumbnail?.contentUrl,
        article_url: news.url,
        sentiment_score: cheerfulScore,
        category: category,
      };
      articles.push(article);

      sentimentSum += cheerfulScore;
    }

    const average_sentiment = Math.round(sentimentSum / articles.length);

    const drinksCollection = db.collection("drinks");

    // Count the total number of drinks with an 'abv' and 'ingredienthas' field
    const totalDrinks = await drinksCollection.countDocuments({
      abv: { $exists: true },
      ingredients: { $exists: true },
    });

    if (totalDrinks === 0) {
      return "No drinks found with both an ABV and ingredients.";
    }

    // Calculate the index based on the rank
    const index = Math.floor((average_sentiment / 100) * totalDrinks);

    // Fetch the drink at the calculated index, sorted by 'abv' in descending order
    const drink = await drinksCollection
      .find({ abv: { $exists: true }, ingredients: { $exists: true } })
      .sort({ abv: -1 }) // Sort in descending order
      .skip(index)
      .limit(1)
      .toArray();

    // Insert the articles array into MongoDB
    await daysCollection.insertOne({
      articles: articles,
      drink: drink[0].strDrink,
      average_sentiment: average_sentiment,
      day: new Date(),
    });

    return {
      statusCode: 200,
      // body: JSON.stringify("Data inserted successfully!"),
      body: JSON.stringify({
        body: JSON.stringify("Data added succesfully!"),
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify("An error occurred!: " + error),
    };
  } finally {
    await client.close();
  }
};
