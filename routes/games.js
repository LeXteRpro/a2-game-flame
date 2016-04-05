var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Games = require('../models/game');

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

// Get handler to show form
router.get('/add', function(req, res, next) {
    res.render('games/add', {
        title: 'Add Game'
    });
});


// POST handler for add to process the form
router.post('/add', function(req, res, next) {

    // save a new article using our Article model and mongoose
    Games.create( {
        title: req.body.title,
        content: req.body.content
    });
    // redirect to main games page
    res.redirect('/games');
});


// GET handler for edit to show form
router.get('/:id', function(req, res, next) {
   // create an id to store the value
   var id = req.params.id;

    // look up the selected article
    Games.findById(id, function(err, game) {
     if (err) {
         console.log(err);
         res.end(err);
     }
     
     else {
           // show the edit view
           res.render('games/edit', {
             title: 'Games',
             game: game
         });
       }
   });
});


// Post handler to update 
router.post('/:id', function(req, res, next) {
    // create an id variable to store the id from the url
    var id = req.params.id;

    // fill the article object
    var game = new Games( {
        _id: id,
        title: req.body.title,
        content: req.body.content
    });

    // use mongoose and model to load
    Games.update( { _id: id }, game,  function(err) {
        if (err) {
            console.log(err)
            res.end(err);
        }
        else {
            res.redirect('/games');
        }
    });
});


// make public
module.exports = router;
