var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Require all models
var db = require("./models");

var app = express();

app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));




// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytsearch"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`�  ==> API Server now listening on PORT ${PORT}!`);
});


