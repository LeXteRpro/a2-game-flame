var express = require('express');
var router = express.Router();

/* GET games page. */
router.get('/discounts', function(req, res, next) {
  res.render('discounts', { 
  	title: 'Express',
  	message: 'Message'
  	 });
});

module.exports = router;
