const connection = require("../config/connection.js");

var orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
        if (err) throw err;
        console.log(result);
    })
}


// function insertOne(){

// };

// function updateOne(){

// };
}
module.exports = orm;