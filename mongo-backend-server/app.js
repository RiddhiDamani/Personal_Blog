var express = require("express");
var path = require("path");
var logger = require("morgan");

var postRouter = require("./routes/post");
var authRouter = require("./routes/auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
// app.use("/users", usersRouter);

module.exports = app;
