// http Moduls

const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./Hello.json","utf-8");


// const server = http.createServer((req,res) =>{

//     res.setHeader("Dummy" , "Dummy Value");
//     res.setHeader("Content-type", "text/html");
//     res.write("Welcome To Local Server...");
//     res.end("Helloo..");

// })



const server = http.createServer();
   server.on("request",(req, res) =>{
    res.setHeader("Content-type", "text/html");
    res.write('<h1 style="color:red" > Hello </h1>');
    res.write("Welcome To Local Server...");
    res.end(data);    

})

// server.on("request",(req, res) =>{
//     console.log(req,url);
//     res.setHeader("Content_type ", "text-html");
//     res.end(data);
//  })

server.listen(4567,() =>{
    console.log("Server Start at port 4567");
});