const connection = require("../config/connection.js");

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      console.log(result)
      cb(result);
    });
  },

  insertOne: function (table, colName, burger_name, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, colName, burger_name], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  updateOne: function (table, colName, colVal, keyName, keyVal, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(
      queryString,
      [table, colName, colVal, keyName, keyVal],
      function (err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      }
    );
  },
};

module.exports = orm;
