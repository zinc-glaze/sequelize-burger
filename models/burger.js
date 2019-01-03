//Import Object Relational Mapping
var orm = require("../config/orm.js");

//TABLE DATA QUERY METHODS
var burger = {
  //Get all data
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //Add new row of data
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //Update row of data
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

//Export query methods
module.exports = burger;

