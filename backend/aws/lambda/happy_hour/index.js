const axios = require("axios");
const MongoClient = require("mongodb").MongoClient;

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
        },
      }
    );

    const newsData = response.data;
    const articles = [];

    // Iterate through each news object
    for (const news of newsData.value) {
      const article = {
        headline: news.name,
        description: news.description,
        thumbnail: news.image.thumbnail.contentUrl,
        article_url: news.url,
        sentiment_score: 50, // Assigning a static integer value of 50 for sentiment score
      };
      articles.push(article);
    }

    // Insert the articles array into MongoDB
    await daysCollection.insertOne({ articles: articles });

    return {
      statusCode: 200,
      body: JSON.stringify("Data inserted successfully!"),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify("An error occurred!"),
    };
  } finally {
    await client.close();
  }
};
