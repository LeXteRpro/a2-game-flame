var express = require('express');
var router = express.Router();

/* GET Locations Page. */
router.get('/locations', function(req, res, next) {
  res.render('locations', { 
  	title: 'Locations',
  	message: 'Message'
  	 });
});

module.exports = router;
