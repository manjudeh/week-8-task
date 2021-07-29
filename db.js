
const mongoose = require('mongoose');

//connect database
mongoose.connect(`${process.env.DB_CONNECT}`,
{ useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,  },
() => console.log('connected to database')
);




module.exports = mongoose
