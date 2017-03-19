var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render('index', {
           burger: data
        });
    })
});

router.post("/create", function(req, res) {
    burger.create(['burger_name'], [req.body.name], function(response){
        res.redirect("/");
    });
});

router.get("/eat/:id", function(req, res) {
    burger.update(['devoured = 1'], 'ID = \'' + req.params.id + '\';', function(response){
        res.redirect("/");
    });
});

module.exports = router;