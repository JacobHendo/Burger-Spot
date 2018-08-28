// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: (cb)=> {
    orm.selectAll("burgers", (res)=> {
      cb(res);
    });
  },
  create: ( vals, cb)=> {
    orm.insertOne("burgers", "burger_name", vals, (res)=> {
      cb(res);
    });
  },
  update: (colVals, condition, cb)=> {
    orm.updateOne("cats", colVals, condition, (res)=> {
      cb(res);
    });
  }
};

// Export the database functions for the controller 
module.exports = burgers;
