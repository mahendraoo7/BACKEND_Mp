const express = require('express');
const orderRoutes = express.Router()
const { verifyToken} = require('../helpers/verifyToken');
const {
    newOrder,
    getAllOrders,
    getOrder 
}  =require('../controller/order.controller');

orderRoutes.post('/add-order',verifyToken , newOrder);
orderRoutes.get('/get-all-order',verifyToken, getAllOrders);
orderRoutes.get('/get-order',verifyToken, getOrder);

module.exports = orderRoutes;