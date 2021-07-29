const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 6,
        max:24
    },

    lastName: {
        type: String,
        required: true,
        min: 6,
        max:24
    },

    email: {
        type: String,
        required: true,
        min: 6,
        max:24
    },

    password: {
        type: String,
        required: true,
        min: 6,
        max:24
    },

    date: {
        type: Date,
        default: Date.now

    } 
     
});

module.exports = mongoose.model('User', userSchema);