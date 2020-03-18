const express = require('express')
const path = require('path')
// Tells node that we are creating an "express" server
var app = express();

// // Sets an initial port. We"ll use this later in our listener
// var PORT = process.env.PORT || 8080;

// // express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
// // The code below is pretty standard.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

var bodyParser = require('body-parser')


const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.use(express.static(path.join(__dirname, 'public')));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App is listening to " + PORT);
  return Promise.resolve("Dummy response to keep the console quiet");
})


