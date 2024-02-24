import json
import os
from pymongo import MongoClient
from datetime import datetime

# Initialize MongoDB client
mongo_client = MongoClient(os.getenv("MONGODB_URI"))
db = mongo_client['mnad']
days_collection = db.days
drinks_collection = db.drinks

def lambda_handler(event, context):
    # Parse date from event
    month = int(event['queryStringParameters']['month'])
    day = int(event['queryStringParameters']['day'])
    year = int(event['queryStringParameters']['year'])
    
    # Create a datetime object for the query, ignoring time
    query_date = datetime(year, month, day)
    
    # Find the document in 'days' collection that matches the date
    day_doc = days_collection.find_one({"day": {"$gte": query_date, "$lt": query_date.replace(hour=23, minute=59, second=59)}})
    
    if not day_doc:
        return {
            'statusCode': 404,
            'body': json.dumps({"message": "No matching document found in 'days' collection."})
        }
    
    # Use the 'drink' field from the 'days' document to find the corresponding 'drinks' document
    drink_doc = drinks_collection.find_one({"strDrink": day_doc['drink']})
    
    if not drink_doc:
        return {
            'statusCode': 404,
            'body': json.dumps({"message": "No matching document found in 'drinks' collection."})
        }
    
    # Combine the documents and return them
    combined_doc = {**day_doc, "drink_details": drink_doc}
    del combined_doc['_id']  # Remove MongoDB's '_id' field to avoid serialization issues
    
    return {
        'statusCode': 200,
        'body': json.dumps(combined_doc)
    }
