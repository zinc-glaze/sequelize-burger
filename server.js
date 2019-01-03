//Import express and set port
var express = require("express");
var app = express(); 
var PORT = process.env.PORT || 3000;

//Serve static content from "public" directory
app.use(express.static("public"));

//Parse incoming urlencoded requests
app.use(express.urlencoded({ extended: true }));
//Parse incoming JSON
app.use(express.json());

//Import handlebars
var exphbs = require("express-handlebars");
//Set handlebars as template engine; set default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import and use router
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Listen for connections on specified port
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
