// Load express and rqeuire modules
var express = require('express');
var path = require ('path');

// Create our express app
var app = express();

// configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// mount middleware (app.use)

// require and mount (app.use) routes


// Define a root route directly on app
// Later, we will use the router object
app.get('/', function(req, res) {
  res.render('home');
});
app.get('/goodbye', function(req, res) {
  res.json( {msg: 'Goodbye World'} );
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
