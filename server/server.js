require("dotenv").config();
var express = require('express');
var bodyParser =require("body-parser");

// Database connection here
const mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection done"));



//-------Define Router Here

// Create the Express application object
var app = express();

// view engine setup

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/calendar", require("./controller/CalenderController"))

var port = 8888;
app.listen(port, () => {
  console.log("server running on port : ", port);
})