const express = require("express");
const app = express(); 
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());

mongoose
.connect(process.env.Mongo_Url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(console.log("Connected to Mongoose"))
  .catch((err) => console.log(err));

    app.use("/api/auth" , authRoute);
    app.use("/api/users" , userRoute);
    app.use("/api/posts" , postRoute);
    app.use("/api/categories" , categoryRoute);
 app.listen("5001", ()=> {
     console.log("Port:5001 Backend is running");
 });