const router = require('express').Router();
const verify = require('../middlewares/verify');
const { createUser, loginUser, getSingleUser, getAllUsers, updateUser, deleteUser} = require('../controllers/users')

// to get a new user
router.post('/signup', createUser);

// to login
router.post('/login', loginUser);

// to get single user
router.get('/users/:email', getSingleUser);

// get all user
router.get('/users', getAllUsers);

//to update user
router.put('/users/updateinfo', verify, updateUser);

// to delete user
router.delete('/users/deleteinfo', verify, deleteUser);

module.exports = router