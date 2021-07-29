const express = require('express')
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req,res) => {
try {
  let user = new User({
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email: req.body.email,
        password: req.body.password

    });

    const savedUser = await user.save();
    res.send(savedUser);
    
} catch (error) {
    res.status(400).send(error);
    console.log(error);
}

});


module.exports = router