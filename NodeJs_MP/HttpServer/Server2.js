// SERVER 2

const https = require("http");

const game = https.createServer((req, res) => {

    res.end("Welcome To Local Server  2...");
});    // server create

game.listen(7890,() =>{
    console.log("Server Start at port 7890");
});
game.close();


