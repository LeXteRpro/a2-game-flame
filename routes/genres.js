var express = require('express');
var router = express.Router();

/* GET games page. */
router.get('/genres', function(req, res, next) {
  res.render('genres', { 
  	title: 'Express',
  	message: 'Message'
  	 });
});

module.exports = router;
