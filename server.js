const express = require("express");
const bodyParser = require("body-parser");
const Sentiment = require("sentiment");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/analyze/:text", (req, res) => {
    const text = req.params.text;  // Accessing the text parameter
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    res.json(result);  // Sending the result back to the client
});

app.listen(port, () => {
  console.log(`This app listens on port ${port}`);
});