import json
import requests
import os

def lambda_handler(event, context):
    # Extract headline and body from the event object
    headline = event.get('headline', '')
    body = event.get('body', '')

    # Prepare the prompt for OpenAI
    prompt = f"Headline: {headline}\nDescription: {body}\n\nBased on the above headline and description, please categorize this news article into one of the following categories:\n\n- Politics\n- World\n- Business\n- Technology\n- Science\n- Health\n- Sports\n- Entertainment\n- Travel\n- Education\n- Environment\n- Culture\n- Automotive\n- Food & Drink\n- Fashion\n- Real Estate\n- Opinion\n- Religion\n- Lifestyle\n- Local News\n- Law & Crime\n- Weather\n- Aerospace & Defense\n- Arts\n- Finance\n- Human Rights\n- Social Issues\n\nCategory:"

    # OpenAI API endpoint
    url = "https://api.openai.com/v1/chat/completions"

    # OpenAI API Key from the environment variable
    openai_key = os.getenv("OpenAI_API_Key")

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
        category = response_data['choices'][0]['message']['content'].strip()

        # Return the category
        return {
            'statusCode': 200,
            'body': json.dumps({"category": category})
        }
    else:
        # Handle request errors
        return {
            'statusCode': response.status_code,
            'body': json.dumps({"message": "Failed to categorize the news article"})
        }
