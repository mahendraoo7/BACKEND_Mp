// Api GET

const express =require("express")
const app = express();
const port = 8080;
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

app.get('/products',(req,res) => {
    res.status(201).json(products);
});

app.get('/products/single-product',(req,res) => {
    const id = +req.query.id;
    // console.log(id);
    let product = products.find((item) => item.id === id);
    res.status(200).json(product);

});

app.listen(port,()=> {

    console.log("Server start at port http://localhost:8080");
})