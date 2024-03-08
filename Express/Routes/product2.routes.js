const express = require('express');
const product2Routes = express.Router();
const { addProducts,
        getAllProducts,
        getProduct,
        updateProduct,
        deleteProduct
} = require('../controller/product2.controller');

product2Routes.post('/add-product',addProducts);

product2Routes.get('/get-all-products',getAllProducts);

product2Routes.get('/get-product',getProduct);

product2Routes.put('/update-product',updateProduct);

product2Routes.delete('/delete-product',deleteProduct);

module.exports = product2Routes;