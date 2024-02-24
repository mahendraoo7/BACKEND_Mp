// SERVER 3


const htttp = require("http");

const web = htttp.createServer((req, res) => {

    res.end("Welcome To Local Server  3...");
});    // server create

web.listen(9870,() =>{
    console.log("Server Start at port 9870");
});

