var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {});

router.get("/", function (req, res) {
  res.send(req.params);
});

module.exports = router;