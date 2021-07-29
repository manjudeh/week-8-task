const express = require('express');
const router = express.Router();
const User = require('../models/User');





// router.get('/api/users', (req, res) =>{
//     res.send('hello to my world')
// });
 
router.get("/signup", (req, res) => {
    res.send("Working... now you need to signup")
});

router.post('/signup', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        height: req.body.height
    });

    try {
         const savedUser = await user.save();

        res.json(savedUser);        
    } catch (err) {
         res.status(400).send(err);
        
    };
});







module.exports = router;
