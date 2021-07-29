
const Joi = require('joi');
const signupValidation = (data) => {

const schema =  {
    firstName: Joi.string().min(6).required(),
    lastName: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
};

   return Jio.validate(data, schema);
};


const loginValidaion = (data) => {

    const schema =  {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };
    
       return Jio.validate(data, schema);
    }

module.exports.signupValidation = signupValidation;
module.exports.loginValidaion = loginValidation;
