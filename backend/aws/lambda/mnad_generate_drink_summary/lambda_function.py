import json
import os
import requests
from pymongo import MongoClient
from bson.objectid import ObjectId

# Initialize MongoDB client
# Note: Store your MongoDB URI in the Lambda function's environment variables for security
mongo_client = MongoClient(os.getenv("MONGODB_URI"))
db = mongo_client['mnad']
drinks_collection = db['drinks']

def lambda_handler(event, context):
    drink_name = event.get('drink_name', '')

    # First, check MongoDB for an existing summary
    drink = drinks_collection.find_one({"strDrink": drink_name})
    if drink and "drinkSummary" in drink:
        return {
            'statusCode': 200,
            'body': json.dumps({"drink_summary": drink["drinkSummary"]})
        }

    # If no summary is found, generate one
    prompt = f"Drink Name: {drink_name}\nProvide a summary of the above drink name with a maximum length of 1 paragraph."
    openai_key = os.getenv("OpenAI_Api_Key")
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openai_key}"
    }
    data = json.dumps({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.1,
    })
    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, data=data)

    if response.status_code == 200:
        response_data = response.json()
        drink_summary = response_data['choices'][0]['message']['content'].strip()

        # Update MongoDB document with the new summary
        if drink:  # If the drink exists but has no summary
            drinks_collection.update_one({"_id": drink["_id"]}, {"$set": {"drinkSummary": drink_summary}})
        else:  # If the drink does not exist in the database
            drinks_collection.insert_one({"strDrink": drink_name, "drinkSummary": drink_summary})

        return {
            'statusCode': 200,
            'body': json.dumps({"drink_summary": drink_summary})
        }
    else:
        return {
            'statusCode': response.status_code,
            'body': json.dumps({"message": "Failed to generate a drink summary."})
        }
