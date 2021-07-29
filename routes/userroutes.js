const express = require('express');
const router = express.Router();

const User = require('../models/User');
// console.log(joi)

router.post('/signup', async (req,res) => {
//input validation
   
   if(error) return res.status(400).send(error.details[0].message);
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

router.post('/products')

});


module.exports = router