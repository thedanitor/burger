const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log("index handlebar: " + hbsObject);
        res.render("index", hbsObject)
        
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create("burger_name", req.body.burger_name, function(res) {
        res.json({ id: res.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(
        "devoured", true, "id", req.params.id, function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
              }
              res.status(200).end();
        }
    );
});
module.exports = router;