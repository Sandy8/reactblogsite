const router = require("express").Router();
const USer = require("../models/User");
const User = require("../models/User");
const bcrypt = require('bcrypt');


//Register

router.post("/register", async (req,res) => {
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const newUSer = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,

        });

        const user = await newUSer.save();
        res.status(200).json(user);

    } catch(err){
        res.status(500).json(err);
    }
})



//Login

module.exports = router;