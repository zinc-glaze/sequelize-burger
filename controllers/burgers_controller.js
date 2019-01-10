//Require models
var db = require("../models");

//ROUTES AND ROUTING LOGIC
module.exports = function(app) {

  //Get all data from SQL table and serve index page
  app.get("/", function(req, res) {
    //Sequelized find all method
    db.Burger.findAll({})
      .then(function(dbBurger) {
        //Make data object for handlebars
        var hbsObject = {
          burgers: dbBurger
        };
        //log new data object to server console
        console.log(hbsObject);
        //render view with data
        res.render("index", hbsObject);
      });
  });

  //Add new row of data to SQL table
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  //Update row of data in SQL table using ID from request parameters
  app.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    //log requested data ID to server console
    console.log("condition", condition);

    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};
