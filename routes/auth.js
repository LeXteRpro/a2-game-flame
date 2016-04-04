var express = require('express');
var router = express.Router();

// GET register and show the registration form
router.get('/register', function (req, res, next) {
	res.render('auth/register', {
		title: 'Register'
	});
});

// GET Login - Show login form
router.get('/login', function (req, res, next) {
	res.render('auth/login', {
		title: 'Login'
	});
});

// Make the page public
module.exports = router