const { MongoClient } = require("mongodb");

exports.handler = async (event, context) => {
  // Extract the date parameter from the event object
  const dateParam = event.queryStringParameters.date;
  if (!dateParam) {
    return {
      statusCode: 400,
      body: "Missing date parameter",
    };
  }

  const queryDate = new Date(dateParam);

  // Define MongoDB connection string and options
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to MongoDB
    await client.connect();

    // Perform the search query
    const database = client.db("mnad");
    const collection = database.collection("days");
    const document = await collection.findOne({ day: queryDate });

    // Check if document is found
    if (!document) {
      return {
        statusCode: 404,
        body: "Document not found",
      };
    }

    // Return the document
    return {
      statusCode: 200,
      body: JSON.stringify(document),
    };
  } catch (error) {
    console.error("An error occurred:", error);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  } finally {
    await client.close();
  }
};
