const express = require("express");
const app = express(); 

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.Mongo_Url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(console.log("Connected to Mongoose"))
  .catch((err) => console.log(err));

 app.listen("5001", ()=> {
     console.log("Backend is running");

 });