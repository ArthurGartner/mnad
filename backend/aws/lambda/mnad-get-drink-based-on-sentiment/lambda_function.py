import os
import pymongo
from pymongo import MongoClient
from bson.json_util import dumps

# Initialize MongoDB client outside the handler to reuse the connection
mongo_client = MongoClient(os.environ['MONGODB_URI'])
db = mongo_client['mnad'] 
collection = db['drinks']

def lambda_handler(event, context):
    # Parse the input value
    input_value = event.get('sentiment_value', 0)

    # Query to check for documents with 'abv' and 'ingredients' fields
    query = {'abv': {'$exists': True}, 'ingredients': {'$exists': True}}

    # Get the count of documents
    doc_count = collection.count_documents(query)

    # Avoid division by zero
    if doc_count == 0:
        return {'message': 'No documents found with required fields.'}

    # Calculate the index
    index = input_value % doc_count  # Use modulo to ensure the index is within bounds

    # Retrieve the document at the calculated index, sorted by 'abv' in descending order
    # Use skip() to move to the desired index and limit() to get just one document
    document = collection.find(query).sort('abv', pymongo.DESCENDING).skip(index).limit(1)

    # Extract the ObjectId from the document, if available
    document_id = next(document, {}).get('_id', None)

    # Return the ObjectId as a string, or a message if not found
    if document_id:
        return {'objectId': str(document_id)}
    else:
        return {'message': 'Document not found at the calculated index.'}
