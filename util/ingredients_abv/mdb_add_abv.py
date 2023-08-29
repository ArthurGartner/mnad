import json
import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")

def update_abv_in_mongodb(json_file_path):
    # Connect to MongoDB instance running on localhost at the default port 27017
    client = MongoClient(MONGODB_URI)
    
    # Access the 'mnad' database and 'ingredients' collection
    db = client['mnad']
    collection = db['ingredients']
    
    # Load the JSON data from the file
    with open(json_file_path, 'r') as f:
        abv_data = json.load(f)
    
    # Loop through each item in the JSON object to update the 'color_hex' field in MongoDB
    for ingredient, abv in abv_data.items():
        query = {"name": ingredient}
        new_values = {"$set": {"abv": abv}}
        
        # Update the document in MongoDB
        collection.update_one(query, new_values)
        print(f"Updated {ingredient}'s abv to {abv}")

# File path to the JSON file containing the name:abv pairs
json_file_path = "C:\\Users\\Arthur.Gartner\\OneDrive\\Documents\\Personal\\Projects\\mnad\\ingredients_abv.json"

# Run the function to update MongoDB documents
update_abv_in_mongodb(json_file_path)
