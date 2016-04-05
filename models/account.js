var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// Create the account schema
var Account = new schema ({
	username: String,
	password: String
});

Account.plugin(passportLocalMongoose);

// Make Public
module.exports = mongoose.model('Account', Account);