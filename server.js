const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {

    const comment = req.body.comment.toLowerCase();

    let score = 100;

    const badWords = [
        const badWords = [
  // English
  "fake","fraud","scam","idiot","stupid","hate",
  "loser","useless","ugly","cheater","garbage",
  "worst","fool","nonsense","abuse","bully",

  // Telugu (English typing)
  "waste",
  "panikimalina",
  "chetta",
  "vedhava",
  "mosagadu",
  "daridram",
  "nikrusta",
  "pichi"
];
    ];

    badWords.forEach(word => {
        if(comment.includes(word)){
            score -= 20;
        }
    });

    if(score < 0) score = 0;

    let status = "SAFE";

if (score <= 80) status = "WARNING";
if (score <= 40) status = "DANGEROUS";
    res.json({
        score,
let message = "";

if (status === "SAFE")
    message = "Comment Safe ✅";

if (status === "WARNING")
    message = "Warning ⚠️ - Comment harmful ga undachu";

if (status === "DANGEROUS")
    message = "Dangerous ❌ - Comment block cheyyali";
        status
    });

});

app.get("/", (req, res) => {
    res.send("SafeGram AI Backend Running");
});

app.listen(5000, () => {
    console.log("SafeGram AI Backend Running");
});