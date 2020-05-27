const connection = require("../config/connection.js");

var orm = {
  selectAll: function (table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function (table, burger_name, devoured) {
    var queryString = "INSERT INTO ?? (?, ?)";
    connection.query(queryString, [table, burger_name, devoured], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function (table, colName, colVal, keyName, keyVal) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(
      queryString,
      [table, colName, colVal, keyName, keyVal],
      function (err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
};

module.exports = orm;
