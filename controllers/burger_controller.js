const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        
    })
})

module.exports = router;