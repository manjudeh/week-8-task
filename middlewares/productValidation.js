const joi = require('@hapi/joi');

//validate product infos
const productValidation = (user) =>{
    const schema = joi.object({
        name: joi.string().min(3).required(),
        descripition: joi.string().min(3).required(),
        category: joi.string().min(3).required(),
        noInStock: joi.number().required(),
        price:joi.number().required()
    }).unknown();
        return schema.validate(user);
}

module.exports= productValidation