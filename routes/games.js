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
    Games.findById(id,  function(err, game) {
     if (err) {
         console.log(err);
         res.end(err);
     }
     
     else {
           // show the edit view
           res.render('games/edit', {
             title: 'Article Details',
             games: games
         });
       }
   });
});





// Make Public
module.exports = router;