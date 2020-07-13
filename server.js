const exphbs = require("express-handlebars");
const express = require("express");
const mysql = require("mysql");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// start the server listening
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

app.get("/", function (req,res) {
  response.send("hello world!")
})