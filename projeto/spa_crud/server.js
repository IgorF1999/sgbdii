var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routes = require('./server/routes/web'); //web routes
var apiRoutes = require('./server/routes/api'); //api routes
var connection = require("./server/config/db"); //mongodb connection

var equipas = require('./server/routes/equipas');
var jogadores = require('./server/routes/jogadores');
var jogo = require('./server/routes/jogo');
var ligas = require('./server/routes/ligas');
var mensagem = require('./server/routes/mensagem');

var server = express();

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

// setting static files location './app' for angular app html and js
server.use(express.static(path.join(__dirname, 'app')));
// setting static files location './node_modules' for libs like angular, bootstrap
server.use(express.static('node_modules'));

// configure our routes
server.use('/', routes);
server.use('/api', apiRoutes);
server.use('/equipas', equipas);
server.use('/jogadores', jogadores);
server.use('/jogo', jogo);
server.use('/ligas', ligas);
server.use('/mensagem', mensagem);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;
