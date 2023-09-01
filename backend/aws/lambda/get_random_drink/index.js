const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  const db = client.db("mnda");
  const collection = db.collection("drinks");

  let randomDrink;
  try {
    const randomDocs = await collection
      .aggregate([{ $sample: { size: 1 } }])
      .toArray();

    randomDrink = randomDocs[0];
  } catch (error) {
    console.error("Error fetching random drink: ", error);
    await client.close();
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "An error occurred while fetching a random drink",
      }),
    };
  }

  await client.close();

  return {
    statusCode: 200,
    body: JSON.stringify(randomDrink),
  };
};
