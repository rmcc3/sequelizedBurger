var express = require("express");

var router = express.Router();

var models = require("../models");

router.get("/", function(req, res) {
	models.burger.findAll({}).then(function(data) {
		res.render('index', {
			burger: data
		});
	});
});

router.post("/create", function(req, res) {
	models.burger.create({
		burger_name: req.body.name,
		devoured: 0,
		date: new Date()
	}).then(function() {
		res.redirect('/');
	});
});

router.get("/eat/:id", function(req, res) {
	models.burger.update({
			devoured: 1
		},
		{
			where: {id : req.params.id}
		}).then(function(){
		res.redirect('/')
	})
});

module.exports = router;