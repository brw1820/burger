const express = require("express");

const router = express.Router();

// Import the model (burger_name.js) to use its database functions.
const burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
    console.log("burger route working");
  burger.insertOne(["burger_name","devoured"], [req.body.burger_name, 0], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

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
