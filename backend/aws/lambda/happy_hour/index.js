const axios = require("axios");
const MongoClient = require("mongodb").MongoClient;
const AWS = require("aws-sdk");
const comprehend = new AWS.Comprehend();

exports.handler = async (event) => {
  // Get MongoDB URI and RapidAPI key from environment variables
  const MONGODB_URI = process.env.MONGODB_URI;
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

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

      const article = {
        headline: news.name,
        description: news.description,
        thumbnail: news.image?.thumbnail?.contentUrl,
        article_url: news.url,
        sentiment_score: cheerfulScore, // Assigning a static integer value of 50 for sentiment score
      };
      articles.push(article);

      sentimentSum += cheerfulScore;
    }

    // Insert the articles array into MongoDB
    await daysCollection.insertOne({
      articles: articles,
      drink: "GG",
      average_sentiment: Math.round(sentimentSum / articles.length),
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
