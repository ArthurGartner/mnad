from pymongo import MongoClient
import os

# Initialize MongoDB client outside the handler
mongo_client = MongoClient(os.environ['MONGODB_URI'])
db = mongo_client['mnad']
collection = db['days']

def lambda_handler(event, context):
    # event is the data_object sent from the invoking function
    collection.insert_one(event)
    return {
        'statusCode': 200,
        'body': 'Document inserted successfully'
    }
