var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Games = require ('../models/games');

router.get('/', function (res, req, next) {

	Article.find(function(err, games) {

		if (err) {
			console.log(err);
			res.end(err);
		}
		else
		{
			res.render('games/index', {
				title: 'Games',
				games: games
			});
		}
	});
});

router.get('add', function(res, req, next) {
	res.render('/games/add', {
		title: 'Add New Game'
		});
});


// Make Public
module.exports = router;