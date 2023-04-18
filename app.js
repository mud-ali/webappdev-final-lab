const express = require("express");
const logger = require("morgan");
const app = express();
const port = 65352;

app.use(logger("dev"));
app.use(express.static(__dirname + '/public'));

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
