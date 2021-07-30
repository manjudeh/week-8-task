const express = require('express');
const router = express.Router();
const bcrypt = require(bcryptjs)
const User = require('../models/User');
const {signupValidation, loginValidaion} = require('../validation/validations');
// console.log(joi)

router.post('/signup', async (req,res) => {
//input validation
   const {error} = signupValidation(req.body)
   if(error) return res.status(400).send(error.details[0].message);

//checking for existing email
const emailExist = await User.findOne({email: req.body.email});
if(emailExist) return res.status(400).send('Email already Exist')   

//hash  the password
const hashedPassword = await bcrypt.hash(req.body.password, 12)
try {
  let user = new User({
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email: req.body.email,
        password: hashedPassword

    });

    const savedUser = await user.save();
    res.send(savedUser);
    
} catch (error) {
    res.status(400).send(error);
    console.log(error);
}

router.post('/login', async (req, res) =>{

    
   const {error} = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

   //checking for existing email
const emailExist = await User.findOne({email: req.body.email});
if(!emailExist) return res.status(400).send('Email not found');

//check password
const checkPassword = await bcrypt.compare(req.body.password, user.password);
if(!checkPassword) res.status(401).send('incorrect password');

})

});


module.exports = router