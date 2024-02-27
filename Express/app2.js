const express =require("express")
const app = express();
const port = 7777;
const morgan = require('morgan');
const path = require('path');


// MIDDLEWARE

let myFun = (req,res,next) => {
    console.log(req.query);

    if((req.query.age) >= 18 ) {

        next();

    } else 
    {
        res.send("Sorry! You have Under below 18");
    }
}

// app.use(myFun);  // Application leval middleware

app.use(express.json());  // Built-In
app.use(express.urlencoded({extended: true}));
app.use('/hello',express.static(path.join(__dirname, 'Express')));



app.use(morgan('dev'));
app.get('/',myFun, (req,res) => {
    res.send("welcome to Express.js");
});

app.post('/',(req,res) => {
    console.log(req.body);
    res.send ("Post Method ");
});

app.listen(port , () => {
    console.log(`Server start at port http://localhost:7777`);  
});
  
