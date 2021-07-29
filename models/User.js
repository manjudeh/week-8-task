const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },

    email: {
        type: String,
        required:true,
        min: 6,
        max: 100
    },

    height: {
        type: String,
        required: true,
        min: 6,
        max: 100
    }
    
})

module.exports = mongoose.model('User', userSchema);