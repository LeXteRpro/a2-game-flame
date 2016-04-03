var express = require('express');
var router = express.Router();

/* GET games page. */
router.get('/advertising', function(req, res, next) {
  res.render('advertising', { 
  	title: 'Express',
  	message: 'Message'
  	 });
});

module.exports = router;
