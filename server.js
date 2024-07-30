const express = require("express");
const bodyParser = require("body-parser");
const Sentiment = require("sentiment");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Middleware to check for required fields
const validateText = (req, res, next) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Text is required for sentiment analysis." });
    }
    next();
};

// POST endpoint to analyze survey or questionnaire feedback
app.post("/analyze", validateText, (req, res) => {
    const { text } = req.body;
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});