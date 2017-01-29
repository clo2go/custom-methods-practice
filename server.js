// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");
//server.env
var PORT = process.env.PORT || 3000;

mongoose.Promise = Promise;

// Require our userModel model
var Example = require("./userModel.js");

// Initialize Express
var app = express();

//init morgan
app.use(logger("dev"));
app.use(bodyParser.urlencoded ({
	extended: false
}));

//public directory
app.use(express.static("public"));

//database config with mongoose
mongoose.connect("mongodb://localhost/3-custom-method-exercise");
var db = mongoose.connection;

//Mongoose errors
db.on("error", function(error) {
	console.log("Mongoose don't give an F about: ", error);
});

//Success Message
db.once("open", function() {
	console.log("Mongoose gives an F about your connection.");
});

//Routes
app.get("/", function(req, res) {
	res.send(index.html);
})
app.post("/submit", function(req, res) {
	var user = new Example(req.body);

})



app.listen(PORT, function() {
	console.log("App is choppin' on P-" + PORT)
});

