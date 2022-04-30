const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Update
router.put("/:id", async (req,res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
    try{
    } catch(err){
        res.status(500).json(err);
    }
    }
    else{
        res.status(401).json("Only update your account!")
    }
});

//Delete
router.put("/:id", async (req,res) => {
    try{

    } catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;