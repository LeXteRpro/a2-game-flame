var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Games = require ('../models/games');

router.get('/', function (res, req, next) {

    Games.find(function(err, games) {

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


// make public
module.exports = router;
