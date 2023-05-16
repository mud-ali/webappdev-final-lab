const db = require("./db_connection");
const fs = require("fs");

const delete_games_sql = "DELETE FROM games;";
db.execute(delete_games_sql);

const delete_users_sql = "DELETE FROM users;";
db.execute(delete_users_sql);

const insert_users_sql = fs.readFileSync(__dirname + "/sql/iUsers.sql").toString();
const insert_games_sql = fs.readFileSync(__dirname + "/sql/iGames.sql").toString();

let users = fs.readFileSync(__dirname + "/sample_data/users.txt").toString().split("\n");
let games = fs.readFileSync(__dirname +"/sample_data/games.txt").toString().split("\n");

for (let user of users) {
    db.execute(insert_users_sql, user.split(";"));
}

for (let game of games) {
    db.execute(insert_games_sql, game.split(";"));
}

db.end();