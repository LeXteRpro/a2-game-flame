var express = require('express');
var router = express.Router();

/* GET games page. */
router.get('/directory', function(req, res, next) {
  res.render('directory', { 
  	title: 'Express',
  	message: 'Message'
  	 });
});

module.exports = router;
