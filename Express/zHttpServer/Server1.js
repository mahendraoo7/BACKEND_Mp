// http Module

// SERVER 1 

const http = require("http");

const server = http.createServer((req, res) => {

    res.end("Welcome To Local Server  1...");
    
});    // server create

server.listen(4567,() =>{
    console.log("Server Start at port 4567");
});












