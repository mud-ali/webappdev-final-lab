const db = require("./db_connection");
const fs = require("fs");

const dropGames_sql ="DROP TABLE IF EXISTS games";
const dropUsers_sql = "DROP TABLE IF EXISTS users;";

db.execute(dropGames_sql);
db.execute(dropUsers_sql);

const createUsers = fs.readFileSync(__dirname+"/sql/cUsers.sql").toString();        
db.execute(createUsers);

const createGames = fs.readFileSync(__dirname+"/sql/cGames.sql").toString();
db.execute(createGames);

db.end();