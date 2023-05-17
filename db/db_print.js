const db = require("./db_connection");
const fs = require("fs");

const rUsers = "SELECT * FROM users";
const rGames = fs.readFileSync(__dirname+"/sql/rGames.sql").toString();

db.execute(rUsers,(err,data)=>{
    if (err) console.error(err);
    console.log("Users:");
    console.log(data);
});
db.execute(rGames,(err,data)=>{
    if (err) console.error(err);
    console.log("Games:");
    console.log(data);
});

db.end();