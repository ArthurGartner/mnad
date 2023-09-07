const { MongoClient } = require("mongodb");

exports.handler = async (event) => {
  const uri = process.env.MONGO_URI; // Fetch MongoDB URL from environment variables

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    const db = client.db("mnad");
    const drinksCollection = db.collection("drinks");
    const ingredientsCollection = db.collection("ingredients");

    const cursor = drinksCollection.find({ ingredients: { $exists: true } });

    while (await cursor.hasNext()) {
      const drink = await cursor.next();
      let totalABV = 0;
      let totalVolume = 0;

      for (const ingredient of drink.ingredients) {
        const name = ingredient.name;
        const volume_oz = ingredient.volume_oz;

        const ingredientDoc = await ingredientsCollection.findOne({
          name: name,
        });

        if (ingredientDoc) {
          const abv = ingredientDoc.abv;

          // Calculate weighted ABV for this ingredient
          const weightedABV = abv * volume_oz;

          // Update total ABV and total volume for the drink
          totalABV += weightedABV;
          totalVolume += volume_oz;
        }
      }

      if (totalVolume === 0) continue; // Skip to the next drink to avoid division by zero

      // Calculate the ABV for the entire drink
      const drinkABV = totalABV / totalVolume;

      // Update the drink document with the calculated ABV
      await drinksCollection.updateOne(
        { _id: drink._id },
        { $set: { abv: drinkABV } }
      );
    }

    return {
      statusCode: 200,
      body: JSON.stringify("ABV calculation complete!"),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify("An error occurred"),
    };
  } finally {
    await client.close();
  }
};
