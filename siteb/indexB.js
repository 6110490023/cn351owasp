const express = require("express");
const app = express();
const path = require('path');
const { constants } = require("buffer");

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/indexB.html'));
});

app.post("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/indexB.html'));
});

app.get("/getdata", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/js/getresponse.js'));
});

app.listen(5000, () => {
    console.log("listening on port 5000...");
});