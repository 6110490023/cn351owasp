const express = require("express");
const app = express();
const path = require('path');
const { constants } = require("buffer");

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/indexA.html'));
});

app.listen(4000, () => {
    console.log("listening on port 4000...");
});