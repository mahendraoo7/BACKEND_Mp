const express = require('express');
const server = express();
const path = require('path');
const ejs = require('ejs');
// const product = require('./public/product.json');

// server.set("view engine","hbs");
server.set("view engine","ejs");

server.get('/student',(req,res) => {
    let data = {
        name: "Mahendra",
        course: "Full-stack Developer",
        age: 19,
        hobbies: ['reading','music']
    }
    res.render("student",data);
});

server.listen(7070, () => {
    console.log('Server star at http://localhost:7070');
});