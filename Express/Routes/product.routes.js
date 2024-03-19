const express = require('express');
const productRoutes = express.Router();
const { addProduct,
        getAllProduct,
        getProduct,
        updateProduct,
        deleteProduct
} = require('../controller/product.controller');

productRoutes.post('/add-product',addProduct);
productRoutes.get('/get-all-products',getAllProduct);
productRoutes.get('/get-product',getProduct);
productRoutes.put('/update-product',updateProduct);
productRoutes.delete('/delete-product',deleteProduct);

module.exports = productRoutes;