var connection = require ("./connection.js");

var orm = {
    selectAll : function(table, cb){
        var query = "SELECT * FROM ?? ";
        connection.query(query, [table], function(err, res){
            if(err) throw err;
            // console.log(res);
            cb(res);
        }); 
    },
    insertOne : function(table, cb){
        var query = "INSERT INTO ??";
        connection.query(query, [table], function(err, res){
            if(err) throw err;
            console.log(res);
        });
    },
    updateOne : function(table, val, cb){
        var query = "UPDATE ?? SET devoured=true WHERE id = ?";
        connection.query(query, [table, val], function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    },
};

module.exports = orm;