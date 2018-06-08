
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database : "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.log("There was an error connecting, see below:");
        console.log(err.stack);
        return;
    }
    console.log("successfully connected as" + connection.threadId);    
});

module.exports = connection;