var express = require("express");

//Create new router object
var router = express.Router();

//Import database query functions
var burger = require("../models/burger.js");

//ROUTES AND ROUTING LOGIC

//Get all data from SQL table and serve index page
router.get("/", function(req, res) {
  //Call method to get all data
  burger.selectAll(function(data) {
    //Make data object for handlebars
    var hbsObject = {
      burgers: data
    };
    //log new data object to server console
    console.log(hbsObject);
    //render view with data
    res.render("index", hbsObject);
  });
});

//Add new row of data to SQL table
router.post("/api/burgers", function(req, res) {
  //Call method to insert row (of data submitted from html form by client)
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(result) {
    //send back ID of the new data object
    res.json({ id: result.insertId });
  });
});

//Update row of data in SQL table using ID from request parameters
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  //log requested data ID to server console
  console.log("condition", condition);
  //Call update method
  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;