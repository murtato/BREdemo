// Load express and rqeuire modules
var express = require('express');
var path = require ('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Materialize = require('node-materialize');
var mongoose = require('mongoose');
// var routes = require('./routes/index');
// var users = require('./routes/users');

// Create our express app
var app = express();

// configure the app (app.set)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.locals.title = 'Lease BREaker';

// mount middleware (app.use)
app.use(function(req, res, next) {
  console.log(req.headers['user-agent']);
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// require and mount (app.use) routes

// Define a root route directly on app
// Later, we will use the router object
app.get('/', function(req, res) {
  res.render('home');
});
// app.get('/about', function(req, res) {
//   res.render('about');
// });
app.get('/goodbye', function(req, res) {
  res.json( {msg: 'Goodbye World'} );
});
app.get('/todos', function(req, res) {
  app.locals.title = 'Lease BREaker';
  app.locals.todos = [
    {todo: 'Feed dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Have fun', done: true}
  ];
  res.render('todos/index', {
    todos: todos
  });
});
app.locals.todos = require('./data/todos');
app.post('/todos', function(req, res){
  app.locals.todos.push({
    todo: req.body.newTodo,
    done: false
  });
  console.log(req.body.newTodo);
  res.render('todos/index');
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
