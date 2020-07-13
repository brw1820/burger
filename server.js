<<<<<<< HEAD
const exphbs = require("express-handlebars");
const express = require("express");
const mysql = require("mysql");
const app = express();
=======
var express = require("express");
>>>>>>> ce60edebd20c8812f476ff32eba1658795eaec51

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// start the server listening
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
=======
var routes = require("./controllers/catsController.js");
const { response } = require("express");

>>>>>>> ce60edebd20c8812f476ff32eba1658795eaec51

app.get("/", function (req,res) {
  response.send("hello world!")
})

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});


