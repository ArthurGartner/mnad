import json
import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")

def update_color_hex_in_mongodb(json_file_path):
    # Connect to MongoDB instance running on localhost at the default port 27017
    client = MongoClient(MONGODB_URI)
    
    # Access the 'mnad' database and 'ingredients' collection
    db = client['mnad']
    collection = db['ingredients']
    
    # Load the JSON data from the file
    with open(json_file_path, 'r') as f:
        color_data = json.load(f)
    
    # Loop through each item in the JSON object to update the 'color_hex' field in MongoDB
    for ingredient, hex_color in color_data.items():
        query = {"name": ingredient}
        new_values = {"$set": {"color_hex": hex_color}}
        
        # Update the document in MongoDB
        collection.update_one(query, new_values)
        print(f"Updated {ingredient}'s color_hex to {hex_color}")

# File path to the JSON file containing the name:hex_color pairs
json_file_path = "C:\\Users\\Arthur.Gartner\\OneDrive\\Documents\\Personal\\Projects\\mnad\\ingredients_colors.json"

# Run the function to update MongoDB documents
update_color_hex_in_mongodb(json_file_path)
