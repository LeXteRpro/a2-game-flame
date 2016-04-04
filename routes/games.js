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

// GET handler for add to display a blank form
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
    }
);

    // redirect to main articles page
    res.redirect('/games');
});


// GET handler for edit to show the populated form
router.get('/:id', function(req, res, next) {
   // create an id variable to store the id from the url
   var id = req.params.id;

    // look up the selected article
    Games.findById(id,  function(err, games) {
     if (err) {
         console.log(err);
         res.end(err);
     }
     
     else {
           // show the edit view
           res.render('games/edit', {
             title: 'Games',
             games: games
         });
       }
   });
});


// POST handler for edit to update the games
router.post('/:id', function(req, res, next) {
    // create an id variable to store the id from the url
    var id = req.params.id;

    // fill the article object
    var Games = new Games( {
        _id: id,
        title: req.body.title,
        content: req.body.content
    });

    // use mongoose and our Games model to update
    Games.update( { _id: id }, games,  function(err) {
        if (err) {
            console.log(err)
            res.end(err);
        }
        else {
            res.redirect('/games');
        }
    });
});


router.get('/delete/:id', function (req, res, next) {

    // Grab the ID parameter from the URL
    var id = req.params.id;

    Games.remove({ _id: id }, function(err) {

        if (err) {
            console.log(err);
            res.end(err);
        }

        else {

            // Show updated articles list
            res.redirect('/games');
        }
    });
});


// Get handler for delete using the article id parameter
router.get('/delete/:id', function(req, res, next) {

    // Grab the ID parameter from the url
    var id = req.params.id;

    Games.remove({ _id: id}, function (err) {
        if (err) {
            console.log(err);
            res.end(err);

         }
         else {
            // Show updated articles list
            res.redirect('/games');
         }
    });
});



// make public
module.exports = router;
