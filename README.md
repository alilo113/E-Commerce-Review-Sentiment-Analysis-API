# E-Commerce Review Sentiment Analysis API

## Overview

This API analyzes the sentiment of customer reviews and generates PDF reports with the results. It supports analyzing single reviews, batches of reviews, and reviews for specific products.

## Dependencies

- `express`: Web framework for building the server.
- `body-parser`: Middleware for parsing JSON request bodies.
- `Sentiment`: Library for sentiment analysis.
- `PDFKit`: Library for creating PDF files.
- `path` and `fs`: Node.js modules for handling file paths and filesystem operations.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ## Endpoints

### 1. Analyze a Single Review

**Endpoint**: `POST /analyze-review`

**Request Body**:
```json
{
  "review": "Your review text here"
}
```
**Response**:
```json
{
  "message": "PDF created successfully.",
  "filePath": "/path/to/the/generated/pdf"
}
```
**Description:** Analyzes a single review and generates a PDF report with the sentiment analysis results.

### 2. Batch Analyze Reviews
**Endpoint**: `POST /batch-analyze-reviews`

**Request Body:**
```json
{
  "reviews": [
    "First review text",
    "Second review text",
    "Third review text"
  ]
}
```
**Response**
```json
{
  "message": "PDF created successfully.",
  "filePath": "/path/to/the/generated/pdf"
}
```
**Description:** Analyzes multiple reviews and generates a single PDF report containing sentiment analysis results for all reviews.
### 3. Analyze Reviews for a Specific Product

**Endpoint:** `POST /analyze-product-reviews`

**Request Body:**
```json
{
  "productId": "product-id",
  "reviews": [
    "Review text 1",
    "Review text 2"
  ]
}
```

**Response:**

```json
{
  "productId": "product-id",
  "results": [
    {
      "score": 1,
      "comparative": 0.5,
      "words": ["good", "excellent"],
      "positive": ["good", "excellent"],
      "negative": []
    },
    ...
  ]
}
```
 **Description:** Analyzes reviews related to a specific product and returns the sentiment analysis results. This endpoint can be extended to include additional product-specific processing.

