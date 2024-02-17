// http Module

// SERVER 1 

const http = require("http");

const server = http.createServer((req, res) => {

    res.end("Welcome To Local Server  1...");
});    // server create

server.listen(4567,() =>{
    console.log("Server Start at port 4567");
});


// SERVER 2

const https = require("http");

const game = https.createServer((req, res) => {

    res.end("Welcome To Local Server  2...");
});    // server create

game.listen(7890,() =>{
    console.log("Server Start at port 7890");
});


// SERVER 3


const htttp = require("http");

const web = htttp.createServer((req, res) => {

    res.end("Welcome To Local Server  3...");
});    // server create

web.listen(9870,() =>{
    console.log("Server Start at port 9870");
});



// SERVER 4


const hhttps = require("http");

const website = hhttps.createServer((req, res) => {

    res.end("Welcome To Local Server  4...");
});    // server create

website.listen(9090,() =>{
    console.log("Server Start at port 9090");
});



// SERVER 5


const htpps = require("http");

const gameweb = https.createServer((req, res) => {

    res.end("Welcome To Local Server  5...");
});    // server create

gameweb.listen(1229,() =>{
    console.log("Server Start at port 1229");
});
