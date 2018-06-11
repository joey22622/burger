var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne : function(cb) {
        orm.insertOne("burgers", function(res){
            cb(res);
        });
    },
    updateOne : function(val, cb) {
        orm.updateOne("burgers", val, cb);
    }


}

module.exports = burger;

// selectAll : function(table){
//     var query = "SELECT * FROM ?? ";
//     connection.query(query, [table], function(err, res){
//         if(err) throw err;
//         console.log(res);
//     }); 
// }