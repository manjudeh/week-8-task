const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const User = require('../models/User');
const {signupValidation, loginValidation} = require('../middlewares/validations');
// console.log(joi)

const createUser = async (req,res) => {
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
    res.send({user: user._id});
    
} catch (error) {
    res.status(400).send(error);
    console.log(error);
};

};

const loginUser = async (req, res) =>{
//validate user 
   const {error} = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

   //checking for existing email
const emailExist = await User.findOne({email: req.body.email});
if(!emailExist) return res.status(400).send('Email not found');

//checking password for correspondence
const checkPassword = await bcrypt.compare(req.body.password, user.password);
if(!checkPassword) res.status(401).send('incorrect password');

const token = jwt.sign({_id:user._id}, process.env.JWT_TOKEN);

return res.json({
    message:'user logged in',
    token
})

};

    //get single user
 const getSingleUser = async(req, res) => {
        try {
            const singleUser = await User.findOne({email: req.params.email});
        res.json(singleUser);
        } catch (error) {
            res.status(400).json(error);
            
        };

    };

        //get all users.
const getAllUsers = async (req, res) =>{
            try{ 
                const users = await User.find({}),

            }catch (error){
                res.status(400).json(error)
            };
        };

        //update user profile
        const updateUser = async (req, res) =>{
            const  {firstName, lastName, email} = req.body
            try{ 
                if((!firstName,!lastName,!email));

                res.status(400).json('please fill all details');

                const users = await User.findOne(req.params.email)
                users.firstName = firstName;
                users.lastName = lastName;
                users.email = email;
                 
                await users.save();

                res.json({status:'success', data: users})
                

            }catch(error){
                res.status(400).json(error);
            };
        };

        //to delete a user
        const deleteUser = async (req, res) =>{
    try {
        const users = await User.findOneAndDelete({email: req.params.email});
        res.send("user deleted")
    
    } catch (error) {
        res.status(400).send(error)
    
        };
            
        };



