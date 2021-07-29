
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//connect database
mongoose.connect('process.env.DB_CONNECT',
{ useNewUrlParser: true },
() => console.log('connected to database')
);

dotenv.config();


module.exports = mongoose
