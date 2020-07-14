const exphbs = require("express-handlebars");
const express = require("express");
const mysql = require("mysql");
const app = express();

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);
// const { response } = require("express");

app.get("/", function (req,res) {
  response.send("hello world!")
})

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});


