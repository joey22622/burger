var connection = require ("./connection.js");

var orm = {
    selectAll : function(table){
        var query = "SELECT * FROM ?? ";
        connection.query(query, [table], function(err, res){
            if(err) throw err;
            console.log(res);
        }); 
    },
    insertOne : function(table){
        var query = "INSERT INTO ??";
        connection.query(query, [table], function(err, res){
            if(err) throw err;
            console.log(res);
        });
    },
    updateOne : function(table, col, val){
        var query = "UPDATE ?? WHERE id = ?";
        connection.query(query, [table, col, val], function(err, res){
            if(err) throw err;
            console.log(res);
        });
    },
};

module.exports = orm;