const express = require("express");
const logger = require("morgan");
const {readFileSync} = require("fs");
const app = express();
const port = 65352;

const DEBUG = true;
const db = require("./db/db_connection");

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs" );

const getDashboardQuery = readFileSync(__dirname+"/db/sql/dashboardGen.sql").toString();

app.get("/dashboard", (req, res)=>{
    db.execute(getDashboardQuery, (err, data)=>{
        if (DEBUG) {
            console.log(err ? err : data);
        }
        if (err) {
            res.status(500).send(err);
        }
        res.render("dashboard", {games: data});
    });
});

const getGameQuery = readFileSync(__dirname+"/db/sql/gameGen.sql").toString();

app.get("/detail/:gameId", (req, res)=>{
    db.execute(getGameQuery, [req.params.gameId], (err, data)=>{
        if (DEBUG) console.log(err ? err : data);
        if (err) res.status(500).send(err);
        else if (data.length == 0)
            res.status(404).send(`No game found with id = "${req.params.gameId}"` );
        res.render("detail", {game: data[0]});
    });
});

app.get("/:page", (req, res) => {
    let allowedPages = ["detail", "index", "login", "play", "signup"];
    if (!allowedPages.includes(req.params.page))
        res.render("index");
    else res.render(req.params.page);
});

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});