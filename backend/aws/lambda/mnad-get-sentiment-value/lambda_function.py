import json
import boto3

def lambda_handler(event, context):
    # Extract headline and body from the event object
    headline = event.get('headline', '')
    body = event.get('body', '')

    # Combine headline and body
    combined_text = f"{headline} {body}"

    # Initialize AWS Comprehend client
    comprehend = boto3.client('comprehend')

    # Perform sentiment analysis
    sentiment_response = comprehend.detect_sentiment(
        Text=combined_text,
        LanguageCode='en'  # Assuming the text is in English; adjust as necessary
    )

    # Extract sentiment scores
    sentiment_scores = sentiment_response['SentimentScore']
    positive = sentiment_scores['Positive']
    negative = sentiment_scores['Negative']
    neutral = sentiment_scores['Neutral']
    mixed = sentiment_scores['Mixed']

    # Calculate cheerfulScore
    cheerful_score = round(
        ((positive - negative) * (1 - mixed) + neutral * mixed + 1) * 50
    )

    # Return the cheerfulScore
    return {
        'statusCode': 200,
        'body': json.dumps({'sentimentScore': cheerful_score})
    }
