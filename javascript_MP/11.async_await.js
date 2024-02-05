// javaScript async/await 

// We use the async keyboard with a function to represent that the function is an asynchrous function. The async function return a promise.


// {

    // async function fun_name(parameter1,parameter2,....parameterN) {
         //   statment

    // }

    // fun_name - name of the function 
    // parameters - parmeters that are passed to the function 




//   Async 

//   the async keyword is used before the function to represent that the function is asynchrous. 

//    {

    //  async function example 

//     async function f() {
//         console.log('async function called ');
//         return Promise.resolve(1);
//     }

//      f();
//    }

//    async function f() {
//      console.log('Async function ');
//      return Promise.resolve("Good Morning ");
//      return Promise.reject ("reject promis");
   
   

//    f().then(function(result)   {
//        console.log(result)

//    }).catch((err)=>console.log(err));

//    }


   // JavaScript await keyword

   // The await keyword is used inside the async function to wait for the for the asychronous operation

//    The syntax to use await is

// {
    // let result = await promise ; 

// }

  // The use of await pauses the async function until the promise return a result (resolve or reject ) value.

//    {

    // // a promise
    //      let promise = new Promise(function (resolve, reject ) {
    //          setTimeout(function (){
    //             resolve ('promise resolved')},4000); 
    // });

    // // async function 
    // async function asyncFunc () {

    //      // wait until the promises resolve 
    //      let result = await promise;

  
    //      console.log(result);
    //      console.log('Hello');

    // }

    //  // caling the async function 
    //  asyncFunc();
// }

// a Promise object is created and it gets resolved after 4000 milisecound . Here,the asyncFunc()function is written using the async function.


    // The await keyword waits keyword waits for the promise to be  (resolve and reject ).
    
    // hello is displayed only after promise value is available to the result variable.after

    // in the above program ,if there are multiple promise in the program.

    //   {

    //     let promise1 = new Promise(function (resolve ,reject) {


    //         setTimeout(function () {
    //             resolve('promise 1 resolved')
    //         },2000);
            
    //     });

    //     let promise2 = new Promise(function (resolve,reject) {
    //         setTimeout(function ()  {
    //             resolve('Promise 2 resolve ' )
            
    //         },3000);

    //     });

    //     let promise3 = new Promise(function (resolve ,reject) {

    //         setTimeout(function () {
    //             resolve('Promise 3 resolved ')
    //         },4000);
    //     });


    //     async function asyncFunc() {

    //         let result1 = await promise1;
    //         console.log(result1);

    //         let result2 = await promise2;
    //         console.log(result2);

    //         let result3 = await promise3;
    //         console.log(result3);

    //     }

    //     asyncFunc();

    // }



    //   Benifite of using async function

    // The code is more readable tham using a calllback or a promise.
    // Error handing i similer.
    // Debugging is easier.



    // Note : Thise two keeywords async / await wereintroduced in the never version of javascript (ES8).older browser may not support the use of async / await....


         //         async / await completed   //