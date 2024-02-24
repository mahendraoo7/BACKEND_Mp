const express = require("express");
const server = express();  //  Server Create

server.get('/',(req,res) => {
    res.end("Welocme To Express.Js");
})
server.get('/user',(req,res) => {
    res.end("Welocme To User Page");
})
server.get('/product',(req,res) => {
    res.end("Welocme To Products List");
})
server.get('/name',(req,res) => {
    res.end(" Name Only Shared");
})
server.get('/',(req,res) => {
    res.end("Welocme To Express");
})

server.listen(4000,()=>{
        console.log("Server Start Port At http://localhost:4000");
});