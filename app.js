const express = require("express");
const logger = require("morgan");
const app = express();
const port = 65352;

app.use(logger("dev"));
app.use(express.static(__dirname + '/public'));

app.get("/:page", (req, res) => {
    let allowedPages = ["dashboard", "detail", "index", "login", "play", "signup"]
    if (!allowedPages.includes(req.params.page))
        res.sendFile(__dirname + "/views/index.html");
    else res.sendFile(__dirname + `/views/${req.params.page}.html`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
