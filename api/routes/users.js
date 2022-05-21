const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Update
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json("updated User");
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json("Only update your account!")
    }
});

//Delete
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        
        try {
            await User.findByIdAndDelete(re.params.id)
            res.status(200).json("User has been deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json("Only delete your account!")
    }
});


module.exports = router;