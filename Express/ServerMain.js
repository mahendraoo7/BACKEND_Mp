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

const user2Routes= require('./Routes/user2.routes');
app.use('/api/user',user2Routes);    

const product2Routes = require('./Routes/product2.routes');
app.use('/api/products',product2Routes);

app.listen(port,()=> {
    console.log(`Server start at http://localhost:${port}`);
})