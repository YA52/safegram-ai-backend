const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {

    const comment = req.body.comment.toLowerCase();

    let score = 100;

    const badWords = [
        "fake",
        "fraud",
        "scam",
        "idiot",
        "stupid",
        "hate",
        "waste",
        "chetta",
        "vedhava",
        "loser",
        "useless"
    ];

    badWords.forEach(word => {
        if(comment.includes(word)){
            score -= 20;
        }
    });

    if(score < 0) score = 0;

    let status = "SAFE";

    if(score < 80) status = "WARNING";
    if(score < 50) status = "DANGEROUS";

    res.json({
        score,
        status
    });

});

app.get("/", (req, res) => {
    res.send("SafeGram AI Backend Running");
});

app.listen(5000, () => {
    console.log("SafeGram AI Backend Running");
});