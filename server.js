// Load express and rqeuire modules
var express = require('express');
var path = require ('path');
var bodyParser = require('body-parser')

// Create our express app
var app = express();

// configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// mount middleware (app.use)
app.user(bodyParser.urlencoded({extended: true})); //allows express to parse data in html forms

// require and mount (app.use) routes


// Define a root route directly on app
// Later, we will use the router object
app.get('/', function(req, res) {
  res.render('home');
});
app.get('/goodbye', function(req, res) {
  res.json( {msg: 'Goodbye World'} );
});
app.get('/todos', function(req, res) {
  var todos = [
    {todo: 'Feed dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Have fun', done: true}
  ];
  res.render('todos/index', {
    todos: todos
  });
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
