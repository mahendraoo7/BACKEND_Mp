// Api GET

const express =require("express")
const app = express();
const port = 8888;
const morgan = require('morgan');
const products = require('./product.json');

// MIDDLEWARE

app.use(express.json());  // Built-In
app.use(morgan('dev'));

//   End- point - CRUD

app.post('/products',(req,res) => {
    // console.log(req.body);   
    const product = req.body;
    products.push(product);
    // product.push({...req.body});
    res.status(201).json({ message : "Product Is Added...."});
});

app.get('/products',( req ,res) => {
    res.status(201).json(products);
});

app.get('/products/single-product',(req,res) => {
    const id = +req.query.id;
    // console.log(id);
    let product = products.find((item) => item.id === id);
    res.status(200).json(product);
});
  // Replace Single Product

app.put('/products/replace-product',(req,res) => {
    const id = + req.query.id;
    let productIndex = products.findIndex((item) => item.id === id) 
    let product = products[productIndex];
    products.splice(productIndex,1 ,{...req.body});
    // console.log(product);
    res.status(200).json({ message : ' Products Replace SucessFully...'});

});
//  Update Single Product
app.patch('/products/update-product', (req,res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id) 
    let product = products[productIndex];
    let item = products.splice(productIndex,1 ,{ ...product, ...req.body});
    // console.log(products);
    res.status(200).json({ message : ' Products update SucessFully...'});

}); 

// Delete Single Producta

app.delete('/products/delete-product', (req,res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id) 
    let product = products[productIndex];
    products.splice(productIndex,1);
    // console.log(products);
    res.status(200).json({ message : ' Products Delete SucessFully...'});
});

app.listen(port,()=> {

    console.log("Server start at port http://localhost:8888");
})