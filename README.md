# Sentiment Analysis API
## Overview
The Sentiment Analysis API is a simple Express-based service that allows you to analyze the sentiment of textual feedback using the Sentiment library. This API can be used to assess whether the feedback is positive, negative, or neutral.
## API endpoints
## POST `/analyze`
Analyzes the sentiment of the provided text.
- Content-Type: application/json
- Body: Must include a text field.
```json
{
  "text": "Your feedback text here."
}
```
### Response
- Status Code: 200 OK
- Content-Type: application/json
### Example Response
``` json
{
  "score": 2,
  "comparative": 0.5,
  "words": ["good"],
  "positive": ["good"],
  "negative": [],
  "positiveConfidence": 1,
  "negativeConfidence": 0,
  "isNeutral": false
}
```
