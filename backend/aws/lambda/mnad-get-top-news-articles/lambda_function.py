import json
import requests
import os

def lambda_handler(event, context):
    # Define the URL
    url = "https://newsnow.p.rapidapi.com/newsv2_top_news_location"
    api_key=os.getenv("RAPIDAPI_NEWSNOW_API_KEY")
    rapidapi_host=os.getenv("RAPIDAPI_HOST")

    # Define the headers
    headers = {
	    "content-type": "application/json",
	    "X-RapidAPI-Key": api_key,
	    "X-RapidAPI-Host": rapidapi_host
    }
    
    payload = {
    "location": "us",
    "language": "en",
    "page": 1
    }

    # Make the POST request
    response = requests.post(url, json=payload, headers=headers)

    # Check if the request was successful
    if response.status_code == 200:
        # Process the response if necessary
        # For example, you can convert the response to JSON
        response_data = response.json()

        # Return the response data
        return {
            'statusCode': 200,
            'body': json.dumps(response_data)
        }
    else:
        # Handle request errors
        return {
            'statusCode': response.status_code,
            'body': json.dumps({"message": "Failed to fetch articles"})
        }
