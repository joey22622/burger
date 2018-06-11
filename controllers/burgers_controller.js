var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    });
    
});

router.put("/burgers/update", function(req, res){
    burger.updateOne(req.body.id, function(result){
        console.log(req.body);
        res.redirect("/");
    });
});











module.exports = router;