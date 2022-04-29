const express = require("express");
const app = express(); 
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
.connect(process.env.Mongo_Url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(console.log("Connected to Mongoose"))
  .catch((err) => console.log(err));

    app.use("/api/auth" , authRoute)
 app.listen("5001", ()=> {
     console.log("Port:5001 Backend is running");
 });