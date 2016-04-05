var express = require('express');
var router = express.Router();

// Add Packages

var passport = require('passport');
var mongoose = require('mongoose');
var Account = require('../models/account');


// GET register and show the registration form
router.get('/register', function (req, res, next) {
	res.render('auth/register', {
		title: 'Register'
	});
});

router.post('/register', function(req, res, next) {

	Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account) {
      if (err) {
         res.render('auth/register', {
         	title: 'Register'
         });
      }
      else {
         req.login(account, function(err) {
            res.redirect('/games');
         });
      }
   });
});

// Get Login - Show login form
router.get('/login', function (req, res, next) {
	res.render('auth/login', {
		title: 'Login'
	});
});


router.post('/login', passport.authenticate('local', {
   successRedirect: '/games',
   failureRedirect: 'auth/login',
   failureMessage: 'Invalid Login'
}));




// Make the page public
module.exports = router