import json
import requests
import os

def lambda_handler(event, context):
    # Extract headline and body from the event object
    drink_name = event.get('drink_name', '')

    # Prepare the prompt for OpenAI
    prompt = f"Drink Name: {drink_name}\n Provide a summary of the above drink name with a maximum length of 1 paragraph."

    # OpenAI API endpoint
    url = "https://api.openai.com/v1/chat/completions"

    # OpenAI API Key from the environment variable
    openai_key = os.getenv("OpenAI_Api_Key")

    # Request headers
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openai_key}"
    }

    # Request data
    data = json.dumps({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.1,
    })

    # Make the POST request to OpenAI
    response = requests.post(url, headers=headers, data=data)

    # Check if the request was successful
    if response.status_code == 200:
        response_data = response.json()

        # Extract the category from the response
        drink_summary = response_data['choices'][0]['message']['content'].strip()

        # Return the category
        return {
            'statusCode': 200,
            'body': json.dumps({"drink_summary": drink_summary})
        }
    else:
        # Handle request errors
        return {
            'statusCode': response.status_code,
            'body': json.dumps({"message": "Failed to generate a drink summary."})
        }
