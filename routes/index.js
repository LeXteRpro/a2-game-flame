var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET Home Page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Home',
  	message: 'Welcome Home'
  	 });
});

/* Get Games Page. */
router.get('/games', function(req, res, next) {
  res.render('games/index', { 
  	title: 'Games',
  	message: 'Message',
    games: 'games',
  	 });
});

/* GET Directory Page. */
router.get('/directory', function(req, res, next) {
  res.render('directory', { 
  	title: 'Directory',
  	message: 'Message'
  	 });
});

/* GET Genres Page */
router.get('/genres', function(req, res, next) {
  res.render('genres', { 
    title: 'Genres',
    message: 'Message'
     });
});

/* GET Locations Page */
router.get('/locations', function(req, res, next) {
  res.render('locations', { 
    title: 'Genres',
    message: 'Message'
     });
});

/* GET Discounts Page */
router.get('/discounts', function(req, res, next) {
  res.render('discounts', { 
    title: 'Discounts',
    message: 'Discounts'
     });
});

/* GET Advertising Page */
router.get('/advertising', function(req, res, next) {
  res.render('advertising', { 
    title: 'Advertising',
    message: 'Advertising'
     });
});


module.exports = router;
