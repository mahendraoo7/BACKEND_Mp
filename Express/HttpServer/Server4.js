// SERVER 4


const hhttps = require("http");

const website = hhttps.createServer((req, res) => {

    res.end("Welcome To Local Server  4...");
});    // server create

website.listen(9090,() =>{
    console.log("Server Start at port 9090");
});