const db = require("./db_connection");

const dropGames_sql ="DROP TABLE IF EXISTS games";
const dropUsers_sql = "DROP TABLE IF EXISTS users;"

db.execute(dropUsers_sql);
db.execute(dropGames_sql);

const create_sql="";

db.end();