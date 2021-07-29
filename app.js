const express = require('express');
const app = express();
const DB = require('./db')

const port = process.env.PORT || 4700;









//import routes

//const authroute = require("./routes/userroutes");

//auth middleware
//app.use('/api', authroute);

app.listen(port, () => console.log(`server running on ${port}`));