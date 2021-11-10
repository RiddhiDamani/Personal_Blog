var express = require("express");
var path = require("path");
var logger = require("morgan");

require("./models/setupMongo")();

var authRouter = require("./routes/auth");
var postRouter = require("./routes/post");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/post", postRouter);

module.exports = app;
