const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
require('dotenv').config();

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

const userRoutes= require('./Routes/user2.routes');
app.use('/api/user',userRoutes);    

// const productRoutes = require('./Routes/product.routes');
// app.use('/products',productRoutes);

// const product2Routes = require('./Routes/product2.routes');
// app.use('/api/products',product2Routes);

// const userRoutes = require('./Routes/user.routes');
// app.use('/users',userRoutes);

app.listen(port,()=> {
    console.log('server start at : $PORT{}');
})