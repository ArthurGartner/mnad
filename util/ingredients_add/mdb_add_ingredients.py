import json
import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")

# Connect to MongoDB server running on localhost at default port 27017
client = MongoClient(MONGODB_URI)

# Select the mnad database
db = client.mnad

# Select the ingredients collection
ingredients_collection = db.ingredients

ingredient_list = []

# Read the .js file and parse it as JSON
with open('C:\\Users\\Arthur.Gartner\\OneDrive\\Documents\\Personal\\Projects\\mnad\\ingredients.json', 'r', encoding='utf-8') as f:
    try:
        entire_data = json.load(f)
        if "ingredients" in entire_data:
            ingredient_list = entire_data["ingredients"]
        else:
            print("Key 'ingredients' not found in JSON data.")
            exit(1)
    except json.JSONDecodeError as e:
        print(f"Failed to decode JSON: {e}")
        exit(1)

# Check if it's a list and proceed
if type(ingredient_list) == list:
    # Transform the array to have a 'name' field instead of 'strIngredient'
    transformed_ingredient_list = [{"name": item["strIngredient"]} for item in ingredient_list]

    # Insert each transformed object as a new document in the ingredients collection
    for ingredient in transformed_ingredient_list:
        ingredients_collection.insert_one(ingredient)
        print(ingredient)

    print("Data inserted successfully!")
else:
    print("Parsed object is not of type list.")