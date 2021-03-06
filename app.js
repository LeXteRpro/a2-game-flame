var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var localStrategy = require('passport-local').Strategy;


var routes = require('./routes/index');
var users = require('./routes/users');
var directory = require('./routes/directory');
var games = require('./routes/games');
var genres = require('./routes/genres');
var locations = require('./routes/locations');
var discounts = require('./routes/discounts');
var advertising = require('./routes/advertising');

var auth = require('./routes/auth');



var app = express();

// Connect to Mongoose
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Error: '));

db.once('open', function(callback) {
  console.log('Connected to mongodb');
});


// read db connection string from our config file
var configDb = require('./config/db.js');
mongoose.connect(configDb.url);


// mongoose.connect('mongodb://localhost/test');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(flash());


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/directory', directory);
app.use('/games', games);
app.use('/genres', genres);
app.use('/locations', locations);
app.use('/discounts', discounts);
app.use('/advertising', advertising);

app.use('/auth', auth);


// Passport session support
app.use(session({

  secret: 'game-flame auth',
  resave: true,
  saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());


var Account = require('./models/account');
passport.use(Account.createStrategy());

// Methods for accessing the session
passport.serializeUser(Account.serializeUser);
passport.deserializeUser(Account.deserializeUser);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
