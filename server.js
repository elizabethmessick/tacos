// you get these from npm.js. 
// These are downloaded.
var createError = require('http-errors');
var express = require('express');
var methodOverride = require('method-override');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

// this is where we will make our routes.
// These are ones we write 
var tacos = require('./routes/tacos'); // . is the current directory
var piroshkis = require('./routes/piroshkis'); // . is the current directory
var index = require('./routes/index')

var app = express();

// view engine setup
// used to set up configuration for express
app.set('views', path.join(__dirname, 'views'));
// ^^ optional. represents the directory of which your ran your node command. Usually the root of my project.
app.set('view engine', 'ejs');
// ^^ this is where the templates are 

// where we confifure all of our middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', tacos); // the '/tacos' will just become '/'
app.use('/', piroshkis); // the '/piroshkis' will just become '/'
app.use('/', index); // the '/piroshkis' will just become '/'

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
