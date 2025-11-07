var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup. A key value pair for configuring express
// e.g. view engine is key, jade is value
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// unlike get, app.use handles all requests
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// if no send and next called in router (middleware), it will simply hang there
app.use('/', indexRouter);
app.use('/users', usersRouter); // Express automatically ignores trailing slashes
// Paths that would match: /products, /products/, /products/electric_products, /products/electric_products/shaver
app.use('/products', productsRouter); // the path is better to have the same name as the filename in routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // with error parameter, it skips remaining non-error handling middlewares
  // and goes to error handling middlewares
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
