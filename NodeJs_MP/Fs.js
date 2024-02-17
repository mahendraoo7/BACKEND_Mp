let fs = require("fs");

let { product } = require("basic.js");

// Synchronously and Asynchorously Method 

// Asychonous Method

// fs.open("abd.txt",(err,data) =>{

//     if(err)
//     {
//         console.log("Failed To Open File");
//     } else 

//        console.log("File Open Sucessfully");
// });




// Synronous Method 

// fs.openSync("abc.txt");
// console.log("File Open Sucessfully");


// READ METHOD 

let t1 = performance.now();
console.log("Products Is : ",product(5,3));
fs.readfile("abc.txt", "utf-8",(err , data) => {
    if (err)
    {
        console.log("Failed to Read File");
    }else 
    {
        console.log(data);
    }
});