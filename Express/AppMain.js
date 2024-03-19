const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const path = require('path');


const mongoose = require('mongoose');
// Database connection

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
}
main()
.then(()=>console.log('DB is connected...'))
.catch(err => console.log(err));

// MiddleWare 
let ImagePath = path.join(__dirname,'public','images')
app.use(express.json());
app.use(morgan('dev'));
app.use('/public/images', express.static(ImagePath));

const cartRoutes = require('./Routes/cart.routes');
app.use('/api/cart',cartRoutes);

const userRoutes= require('./Routes/user.routes');
app.use('/api/user',userRoutes);

const productRoutes = require('./Routes/product.routes');
app.use('/api/products',productRoutes);

const orderRoutes = require('./Routes/order.Routes');
app.use('/api/order',orderRoutes);

app.listen(port,()=> {
    console.log(`Server start at http://localhost:${port}`);
});