const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        min: 3
    },
    description: {
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
        min: 3
    },
    price:{
        type: Number,
        required: true
    },
    noInStock:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required:true,
    },
    url:{
        type: String,
        required:true
    },
    user:{type: mongoose.Types.ObjectId},
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Products', productSchema)