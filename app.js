const express = require('express');
const app = express();
const port = process.env.PORT || 4700;
const dotenv = require('dotenv');
dotenv.config({path: './root.env'});

//connect to database
const DB = require('./db')

//bodyparser
app.use(express.json());

//import routes
 const userRoute = require("./routers/userroutes");
const productRoute = require("./routers/productRoutes")
//auth middleware
 app.use('/api', userRoute);

 app.use('/api', productRoute);
 
app.listen(port, () => console.log(`server running on ${port}`));