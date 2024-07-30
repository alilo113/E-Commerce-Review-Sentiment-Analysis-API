const express = require("express");
const bodyParser = require("body-parser");
const Sentiment = require("sentiment");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Middleware to check for required fields in the single text analysis
const validateText = (req, res, next) => {
    if (!req.body.text && !req.body.texts) {
        return res.status(400).json({ error: "Text or texts are required for sentiment analysis." });
    }
    next();
};

// POST endpoint to analyze survey or questionnaire feedback
app.post("/analyze", validateText, (req, res) => {
    const { text } = req.body;

    if (typeof text !== 'string') {
        return res.status(400).json({ error: "Text must be a string." });
    }

    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    res.json(result);
});

// POST endpoint to analyze a batch of texts
app.post("/batch-analyze", validateText, (req, res) => {
    const { texts } = req.body;

    if (!Array.isArray(texts)) {
        return res.status(400).json({ error: "Texts must be an array of strings." });
    }

    if (texts.some(text => typeof text !== 'string')) {
        return res.status(400).json({ error: "All items in texts must be strings." });
    }

    const sentiment = new Sentiment();
    const results = texts.map(text => sentiment.analyze(text));

    res.json(results);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});