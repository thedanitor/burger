const orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    create: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        });
    },

    update: function(colName, colVal, keyName, keyVal, cb) {
        orm.updateOne("burgers", colName, colVal, keyName, keyVal, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;