require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');

const mongoose = require('mongoose');
// Database connection

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
}
main()
.then(()=>console.log('DB is connected...'))
.catch(err => console.log(err));

// MiddleWare 
app.use(express.json());
app.use(morgan('dev'));

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
})