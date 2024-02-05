/* operator
Arithmatic => + - * / %**++
relational => < <= > >= != === != ?:
Assigment => += -=*===**=
logical => && || ! ^(XOR)
typeof
*/
// console.log(5**3);


// console.log(10 == 10) // only value chaeck
// console.log(10 == "10")// only value chaeck
// console.log(10 === "10")// value chaeck and data type check
// console.log(5 != "5")
// console.log(5 !== "5")
// console.log(0^0)
// console.log(0^1)
// console.log(1^0)
// console.log(1^1)
// console.log((10<3)?"True": "false")
// console.log(typeof(10))
// console.log(typeof("10"))
// console.log(typeof(true))
// console.log(10 + "5")
// console.log(typeof(10 + "5"))
// console.log(10 - "5")
// console.log(typeof(10 - "5"))
// console.log("100" - 5)
// console.log(typeof("100" - 5))
// console.log("100" * 5)
// console.log(typeof("100" * 5))
// console.log(100 + "a")
// console.log(typeof(100 + "a"))
// console.log(100 * "a")
// console.log(typeof(100 * "a"))





//String => collection of characters (Array)

// let txt;

// let str = "hello Wolrd";

// str = 'Skill Qode'

// txt = "Hello guys'dfszczgd"

// txt = 'Hello guys"dfszczgd'

// console.log(txt);

// String Methods

// // length -> property

// // slice(start position, end position) substring(start position, end position)

// // substr(start position, length)

// // toUpperCase -> upper case convert

// // toLowerCase -> lower case convert

// // charAt -> return index charater

// // charCodeAt -> return index charater ASCII value

// concat -> merge two string




// let data = "Mahendra Purohit "

// console.log(data.length)

// console.log(data.slice(5,12));

// console.log(data.slice(25));

// console.log(data.slice(-12,-3));

// console.log(data.substring(5,12));

// console.log(data.substring(25));

// console.log(data.substring(-12));

// console.log(data.substring(-12,5));

// console.log(data.substr(5,12));

// console.log(data.substr(-15,12));

//console.log(data.toUpperCase());

// console.log(data.toLowerCase());

// console.log(data.charAt(5));

// console.log(data.charCodeAt(0));
// console.log(data.charCodeAt(1));
// console.log(data.charCodeAt(5));

// cript i

// starting to rest of all string

// last to counting

// cript i

// starting to rest of all string

// counting to 0

// counting to

// cript is the

//mming langua

// console.log(data.concat("Hello Wolrd", "\n SkillQode"));




let data = "javascript is the world's most popullar laguage in the world ";

 console.log(data)
//  console.log(data.replace("worlds","india"))
// console.log(data.replace(/Worlds/i , "india" ))
// console.log(data.replace(/worlds/m , "india" ))
// console.log(data.replace(/worlds/g , "india" ))   

// console.log(data.replaceAll("world" , "india"))

// let txt = "        hello world        ";

// console.log(txt);
// console.log(txt.trim());     // remove extra space 
// console.log(txt.trimStart());     // remove extra space frome start
// console.log(txt.trimEnd());     // remove extra space frome end
// console.log("Lenght is :" + txt.trimEnd().length);     

// let txt = "98434";
// console.log(txt.padStart(8 , "X"))
// console.log(txt.padEnd(8 , "X"))


// console.log(data.split(""))
// console.log(data.split(" "))
// console.log(data.split("a"))


   // console.log(data.split(""))


//      MATH PROPERTIES  
 
// Math.E   // return Euler's number 
// Math.PI    // return PI 
// Math.SQRT2   // return the square root of 2 
// Math.SQRT1_2   // return the square root of 1/2 
// Math.LN2   // return the natural logarithe of 2  
// Math.LN10   // return the natural logarithe of 10 
// Math.LOG2E   // return base 2 logarithm of E  
// Math.LOG10E   // return base 10 logarithm of E   
 
//      MATH METHODS  




 
// console.log(Math.round(4,6));     // 5  returns the nearest integer 
// console.log(Math.round(4,3));     // 4 
 
// console.log(Math.ceil(4.6));     // 5  returns the value of x rounded up to tis nearest integer 
// console.log(Math.ceil(4.2));     // 5 
// console.log(Math.ceil(-4.3));     // -4 
 
// console.log(Math.floor(4.6));     // 4  returns the value of x rounded down to tis nearest integer 
// console.log(Math.floor(4.2));     // 4 
// console.log(Math.floor(-4.3));     // -5 
 
// console.log(Math.trunc(4.6));      // 4  returns the integer part of x 
// console.log(Math.trunc(4.2));      // 4 
 
// console.log(Math.sign(-4));      // -1  returns if x is negative , null or positive 
// console.log(Math.sign(0));      // 0 
// console.log(Math.sign(4));      // 1 
 
// console.log(Math.pow(2,3));     // 8  returns the value of x to the power of y 
// console.log(Math.pow(8,2));     // 64 
 
// console.log(Math.sqrt(16));     // 4  returns the square root of x 
// console.log(Math.sqrt(121));     // 11 
 
// console.log(Math.abs(-6));     // 6  returns the absolute(positive) value of x 
// console.log(Math.abs(1.2));    // 1.2 
 
// console.log(Math.random());     // 0.45465544448465 
 
// console.log(Math.min(0,150,30,20,-8,-200));    // -200  can be used to find the lowest or highest value in a list of arguments 
// console.log(Math.max(0,150,30,20,-8,-200));    // 150 
 
// console.log(Math.sin(90 * Math.PI / 180));     // 1 (the sine of 90 degrees)  return the sine of  the angle x. 
// console.log(Math.sin(30 * Math.PI / 180));     // 0.5 (the sine of 30 degrees) 
 
// console.log(Math.cos(0 * Math.PI / 180));     // 1 (the cos of 0 degrees)   retuen the cosine of the angle x 
// console.log(Math.cos(60 * Math.PI / 180));     // 0.5 (the cos of 60 degrees) 
 
// console.log(Math.log(1));     // 0          returns the natural logarithm of x  
// console.log(Math.log(2));     // 0.6931471805599453 
// console.log(Math.log(10));     // 0.302585092994046 
 
// console.log(Math.log2(8));     // 3      returns the base 2 logarithm of x  
 
// console.log(Math.log10(1000));   // 3    return the base 10 logarithm of x



//  |  toString() - returns a number as a string   //



 
// let x = 123; 
// console.log(x.toString());  // 123 
// console.log((123).toString());  //123 
// console.log((100+23).toString()); //123 
 
//  | toExponential() - returns a number written in exponential notation | 
 
// let x = 9.656; 
// console.log(x.toExponential());   // 9.656e+0 
// console.log(x.toExponential(2));   // 9.66e+0 
// console.log(x.toExponential(4));   // 9.6560e+0 
// console.log(x.toExponential(6));   // 9.656000e+0 
 
//  | toFixed() - returns a number written with a number of decimals | 
 
// let x = 9.656; 
// console.log(x.toFixed());   //  10 
// console.log(x.toFixed(2));   // 9.66 
// console.log(x.toFixed(4));   // 9.6560 
// console.log(x.toFixed(6));   // 9.656000 
 
//  | toPrecision() - return a number written with a speciufied length | 
 
// let x = 9.656; 
 
// console.log (x.toPrecision());   // 9.656 
// console.log (x.toPrecision(2));  // 9.7 
// console.log (x.toPrecision(4));  // 9.656 
// console.log (x.toPrecision(6));  // 9.65600 
 
// | valueof() - returns a number as a  number | 
 
// let x = 123; 
// console.log(x.valueOf());   // 123 
// console.log((123).valueOf());  // 123 
// console.log((100+23).valueOf());   //  123 
 
//  | Number() - Rerturns a number converted from argument | 
 
// console.log(Number(true));   // 1 
// console.log(Number(false));   // 0 
// console.log(Number("10"));   // 10 
// console.log(Number(" 10"));   // 10 
// console.log(Number("10 "));   // 10 
// console.log(Number(" 10 "));   // 10 
// console.log(Number("10.33"));   // 10.33 
// console.log(Number("10,33"));   //  NaN 
// console.log(Number("10 33"));   //  NaN 
// console.log(Number("John"));   // NaN 
 
//  | parseFloat() - parse its argument and returns a floating point number | 
 
// console.log(parseFloat("10"));    // 10 
// console.log(parseFloat("10.33"));    // 10.33 
// console.log(parseFloat("10 20 30 "));    // 10 
// console.log(parseFloat("10 years"));    // 10 
// console.log(parseFloat("years 10"));    // NaN 
 
// | parseInt() - parse its argument and returns a whole number | 
 
// console.log(parseInt("-10"));   //  -10 
// console.log(parseInt("-10.33"));   //  -10 
// console.log(parseInt("10"));   //  10 
// console.log(parseInt("10.33"));   //  10 
// console.log(parseInt("10 20 30"));   //  10 
// console.log(parseInt("10 years"));   //  10 
// console.log(parseInt("years 10"));   //  NaN 
 
// | Number.isInteger() - returns true if the argument is an integer |  
 
// console.log(Number.isInteger(10));  // true 
// console.log(Number.isInteger(10.5));  // false 
 
// | Number.isSafeInteger() - returns true if the argument is a safe integer |  
 
// console.log(Number.isSafeInteger(10));  // true 
// console.log(Number.isSafeInteger(12345678901234567890));  // false 
 
// | Number.parseFloat() - convert a string to a number | 
 
// console.log(Number.parseFloat("10"));    // 10 
// console.log(Number.parseFloat("10.33"));    // 10.33 
// console.log(Number.parseFloat("10 20 30"));    // 10 
// console.log(Number.parseFloat("10 years"));    // 10 
// console.log(Number.parseFloat("years 10"));    // NaN 
 
// | Number.parseInt() - convert a string to a whole number | 
 
// console.log(Number.parseInt("-10"));    // -10 
// console.log(Number.parseInt("-10.33"));    // -10 
// console.log(Number.parseInt("10"));    // 10 
// console.log(Number.parseInt("10.33"));    // 10 
// console.log(Number.parseInt("10 6"));    // 10 
// console.log(Number.parseInt("10 years"));    // 10 
// console.log(Number.parseInt("years 10"));    // NaN





// Date Methods 
 
// let d = new Date(); 
// let d = new Date("2023-05-01 10:30 AM"); 
// year, month, date, hour, minute, second => month (0-11) 
// let d = new Date(2021,1,15,28,15,70); 
// let d = new Date(2021,1,15,28,15,70); 
 
// console.log(d.toString()); 
// console.log(d.toDateString()); 
// console.log(d.toISOString()); 
// console.log(d.toUTCString()); 
// console.log(d.toLocaleDateString()); 
// console.log(d.toLocaleTimeString()); 
// console.log(d.toLocaleString()); 
 
// console.log(d.getFullYear()); 
// console.log(d.getMonth()); 
// console.log(d.getDate()); 
// console.log(d.getHours()); 
// console.log(d.getMinutes()); 
// console.log(d.getSeconds()); 
// console.log(d.getMilliseconds()); 
// console.log(d.getTime()); 
// console.log(d.getDay()); 
// console.log(d.getTimezoneOffset()); 
 
// d.setDate(31); 
// d.setFullYear(2025); 
// d.setMonth(11); 
// d.setHours(11); 
// d.setMinutes(19); 
// d.setSeconds(49); 
// d.setMilliseconds(49); 
// d.setTime(2501528486965); 
 
 
// console.log(d); 
 
// console.log(d.getFullYear());






                                 // Function  //
 
// Hello();       // function call 
 
//  function Hello()       // function defined 
// { 
//     console.log('Hello world'); 
// } 
 
// function Add(a,b) 
// { 
//     console.log(a*b); 
// } 
 
// Add(10,'hello'); 
 
// function product (a,b,c) 
// { 
//     return a*b*c; 
// } 
 
// let x = product(1,5,9); 
 
// console.log(x); 
 
// console.log(product(1,50,9)); 
 
// function as variable / anonymous function  
 
// const product = function(a,b,c) 
// { 
//     return a*b*c; 
// } 
 
// console.log (product(11,22,3)); 
 
// let skill = function () 
{ 
    console.log ('skillQode - decode your skill'); 
}; 
 
skill();
 
(function(){ 
   let x = "Hello! i called myself"; 
})