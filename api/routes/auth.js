const router = require("express").Router();
const USer = require("../models/User");
const User = require("../models/User");

//Register
router.post("/register", async (req,res) => {
    try{
        const newUSer = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,

        });

        const user = await newUSer.save();
        res.status(200).json(user);

    } catch(err){
        res.status(500).json(err);
    }
})



//Login