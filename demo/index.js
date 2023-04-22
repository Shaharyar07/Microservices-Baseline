const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mongoURI = "mongodb://demo-mongo-clusterip:27017/demo";

const connectToMongo = () => {
  mongoose.connect(mongoURI).then(() => console.log("Connected to Mongo"));
};

connectToMongo();

app.listen(3000, () => console.log("Server is running"));
