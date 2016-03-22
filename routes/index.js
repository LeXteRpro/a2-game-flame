var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Express',
  	message: 'Message'
  	 });
});

/* GET games page. */
router.get('/games', function(req, res, next) {
  res.render('games/index', { 
  	title: 'Express',
  	message: 'Message'
  	 });
});

module.exports = router;
