const express = require("express");
const app = express();
const path = require('path');
const { constants } = require("buffer");

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/indexP.html'));
});
app.get("/child", (req, res) => {
    res.sendFile(path.join(__dirname + '/child.html'));
});
app.listen(8000, () => {
    console.log("listening on port 8000...");
});