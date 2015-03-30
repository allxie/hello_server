// At the top of our file we declare variables
// for all of the packages we're going to use
// in the file. For this example, we'll only need
// be using a single package called 'express'.
// We `require('express')` and save the results
// in an appropriately named variable.

var express = require('express');

// Next we declare a variable that instantiates
// the express server. Common names for this
// variable include `app` or `server`. We're
// going to call it `app` because that's what
// they do in the express documentation.

var app = express();

// Now that we have an app to build off of,
// we should set up some routes.

// The pattern for setting up routes in express is as follows
// 
// app . HTTP-VERB ( '/ROUTE/PATH/DELIMITED/BY/SLASHES' , function(req,res) { // DO STUFF HERE // });


// Our first route will be `GET /` which will respond
// with "Hello World" for every request that
// comes in to your server.

app.get('/', function(req,res) {

  // Send back the response 'Hello World'

  res.send("Hello World...");
});

app.get('/hey', function(req,res) {

  res.send("<h1>Hey! Look at me!</h1>");
});


app.get('/hi/:name', function(req,res) {
  res.send("<h1>Hi, I'm " + req.params.name + "</h1>");
});

app.get('/add/:x/:y', function(req,res) {
	// var x = Number(req.params.x);
	// var y = Number(req.params.y);
	// var sum = x + y;
  res.send("<h1>The sum of " + req.params.x + " and " + req.params.y + " is " + Number(req.params.y) + Number(req.params.x) + "</h1>");
});


// Tell the app to start listening for
// requests on port 3000.

app.listen(3000);