// SERVER 5


const htpps = require("http");

const gameweb = https.createServer((req, res) => {

    res.end("Welcome To Local Server  5...");
});    // server create

gameweb.listen(1229,() =>{
    console.log("Server Start at port 1229");
});
