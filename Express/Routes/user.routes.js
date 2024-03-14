const express = require('express');
const user2Routes = express.Router();
const {verifyToken} = require('../helpers/verifyToken')
const {registerUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser} = require('../controller/user.controller');

user2Routes.post('/register-user',registerUser);
user2Routes.post('/login-user',loginUser);
user2Routes.get('/get-all-user',verifyToken,getAllUser);
user2Routes.get('/get-user',verifyToken,getUser);
user2Routes.put('/update-user',updateUser);
user2Routes.delete('/delete-user',deleteUser);

module.exports = user2Routes ; 



