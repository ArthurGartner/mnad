import json
import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

# Function to transform and insert one object
def transform_and_insert(obj):
    # Initialize empty arrays for ingredients and measures
    ingredients = []
    measures = []

    # Loop to populate the arrays
    for i in range(1, 16):  # 1 to 15 inclusive
        ingredient_key = f"strIngredient{i}"
        measure_key = f"strMeasure{i}"

        if obj.get(ingredient_key) is not None:
            ingredients.append(obj[ingredient_key])

        if obj.get(measure_key) is not None:
            measures.append(obj[measure_key])

    # Remove original fields
    for i in range(1, 16):
        obj.pop(f"strIngredient{i}", None)
        obj.pop(f"strMeasure{i}", None)

    # Add new fields
    obj["strIngredient"] = ingredients
    obj["strMeasure"] = measures

    # Insert into MongoDB
    collection.insert_one(obj)

MONGODB_URI = os.getenv("MONGODB_URI")
LOCATION = os.getenv("LOCATION")

# Establish a MongoDB connection
client = MongoClient(MONGODB_URI)
db = client['mnad']  # Replace 'your_database' with your database name
collection = db['drinks']  # Replace 'your_collection' with your collection name

# Load the JSON object from a file
with open(LOCATION, 'r', encoding='utf-8') as f:
    data_object = json.load(f)

# Access the "drinks" key to get the array
data_array = data_object.get('drinks', [])

# Loop through the array and transform and insert each object
for obj in data_array:
    print("RAN")
    transform_and_insert(obj)
