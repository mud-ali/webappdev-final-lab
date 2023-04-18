const express = require("express");
const app = express();
const port = 65352;

app.get("/js/:file.js", (req, res) => {
    res.sendFile(__dirname + `/views/js/${req.params.file}.js`);
});

app.get("/css/:file.css", (req, res) => {
    res.sendFile(__dirname + `/views/css/${req.params.file}.css`);
});

// handle all image types
app.get("/assets/:file.:type", (req, res) => {
    res.sendFile(__dirname + `/views/assets/${req.params.file}.${req.params.type}`);
});

app.get("/:page.:type", (req, res) => {
    if (!["html","htm","txt"].includes(req.params.type)) {
        res.send("404 File Not Found");
        return;
    }
    res.sendFile(__dirname + `/views/${req.params.page}.${req.params.type}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
