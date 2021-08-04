const jwt = require("jsonwebtoken");

function authToken(req,res,next){
    const token = req.header('login-token');
    if(!token) return res.status(401).send('please login');

    try {
        const auth = jwt.verify(token, process.env.JWT_SECRET);
        req.user = auth;
        next();

    } catch (error) {
        res.status(400).send('invalid token')
        
    };
};

module.exports = authToken;