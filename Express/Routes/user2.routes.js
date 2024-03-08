const express = require('express');
const userRoutes = express.Router();
const {addUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser} = require('../controller/user2.controller');

userRoutes.post('/add-user',addUser);
userRoutes.get('/get-all-user',getAllUser);
userRoutes.get('/get-user',getUser);
userRoutes.put('/update-user',updateUser);
userRoutes.delete('/delete-user',deleteUser);

module.exports = userRoutes ; 



