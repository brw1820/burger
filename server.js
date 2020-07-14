
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const app = express();

const PORT = process.env.PORT || 8080;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.use(routes);

// start the server listening
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

// const { response } = require("express");




