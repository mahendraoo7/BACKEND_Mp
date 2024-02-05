  // ARRAY //


  //   PUSH METHOD 


  //    let data = ["bmw","farrari","supra","jeguar","mercedez"];

  //    console.log(data);
  //    data.push("lemborgini");
  //    data.push("rang rover");
  //    data.push("Scorpio");
     

  //   POP METHOD 

  //    let data = ["bmw","farrari","supra","jeguar","mercedez"];

  //    console.log(data);
  //    data.pop();
  //    data.pop();


  //   SHIFT METHOD 


  //   let data=[1,2,3,4,5,6,7,8,9,0,];

  //   console.log(data);
  //   data.shift();
  //   data.shift();
  //   data.shift();

  //   UNSHIFT METHOD 

  //   let data=["world","india","banaskantha","mewada","palanpur"];

  //   console.log(data);
  //   data.unshift("dhanera");
  //   data.unshift("gujrat");

  
     
  //    CHAMGING ELEMENT//

  //   let data=["world","india","banaskantha","mewada","palanpur"];
     
  //   console.log(data);
  //   data[0] = "dhanera";
  //   data[4] = "gujrat";
    
    
  //   MERGING A ARRAY //

  //   let data = ["apple","mi","one plus","vivo","oppo"];
  //   let phone = ["redmi","poco","realme"];

  //   console.log(data.concat(phone));


  //   SPLICE METHOD

  //   let data = [11,23,43,45,65,67,87,89,9];
  //   let data = ["mahindra","tata","suzuki","honda"];

  //   data.splice(0,2, "lemon ","kiwi");
  //   console.log(data);

    

  //   SLICE METHOD IN ARRAY //

  //   let data = ["apple","mi","one plus","vivo","oppo"];

  //   console.log(data.slice(0,4));
       
 
  //   SORT METHOD IN ARRAY //


  //   let game = ["free fire","cod","pubg","wi city","gta","payback 2"];

  //   game.sort();
  //   console.log(game);
  


  //   SORT METHOD IN NUMBER //


  //   let number = [11,44,77,99,55,33,22,88,66];
  //   let number2= [12,43,567,87,90,223,,78,65,45,98,71,19,28,38,35,46]; 

  //   number.sort(function (a,b){return a-b});
  //   number2.sort((a,b)=>a-b);
  //   console.log(number);
  //   console.log(number2);
  

  //   REVERSE METHOD //


  //   let app = ["phone pay","paytm","google pay","sbi","rbi","bob"];

  //   app.sort();
  //   app.reverse();
  //   console.log(app);


  //   MAX METHOD //

  //   function myArrayMax(arr) {
  //   return Math.max.apply(null, arr);
  //   }

  //  let points= [12,43,56,87,90,22,78,65,45,98,71];
  //  console.log(myArrayMax(points));
    

  //  MIN METHOD //
 
  //  function myArrayMin(arr) {
  //     return Math.min.apply(null, arr);
  //     }
  
  //    let points= [12,43,56,87,90,22,78,65,45,98,71];
  //    console.log(myArrayMin(points));
      

    
  //         FOREACH METHOD //

  //  let numbers = [45, 4, 9, 16, 25];
  //  let txt = "";
  //  numbers.forEach(myFunction);
  //  function myFunction(value, index, array) {
  //  txt += value + " ";
  //  }
    
  //  console.log(txt);

    

  //           MAP METHOD   //


  // let numbers1 = [45, 4, 9, 16, 25];
  // let numbers2 = numbers1.map(myFunction);
  // function myFunction(value, index, array) {
  // return value * 2;
  // }

  // console.log(numbers2);



  //   FILTER METHOD  //

  //   let numbers = [45, 4, 9, 16, 25];
  //   let over = numbers.filter(myFunction);
  //   function myFunction(value, index, array) {
  //   return value < 10;
  //    }

  //    console.log(over);

  //           REDUCE METHOD        //
  
  //    let numbers = [1,2,3,4,5];
  //    let sum = numbers.reduce(myFunction);
  //    function myFunction(total, value) {
  //    return total + value;
  //    }
  //    console.log(sum);
  
  //           REDUCERIGHT METHOD     //

  //    let numbers = [45, 4, 9, 16, 25];
  //    let sum = numbers.reduceRight(myFunction);
  //    function myFunction(total, value, index, array) {
  //    return total + value;
  //    }
  
  //     console.log(sum);

  
  //          EVERY METHOD     //


  //     let numbers = [19,23,45,65,67];
  //     let num = numbers.every(myFunction);
  //     function myFunction(value) {
  //     return value > 18;
  //     }

  //     console.log(num)

  //         SOME METHOD        //

  //     let numbers = [12,23,54,56,76,87];
  //     let sum = numbers.some(myFunction);
  //     function myFunction(value) {v
  //     return value < 4;
  //     }

  //     console.log(sum);
  
  //     FIND METHOD //

        //  let data = [3,6,4,23,34,45,65,];
        //  let data2 = data.find(the);    
        
        //   function the (z) {
              
        //     return z > 22;

        //  }
       
        // console.log(data2);

  //        FINDINDEX METHOD  //

        // let data = [4, 9, 16, 25, 29];
        // let number = data.findIndex(the);

        // function the(x) {

        //   return x > 27;

        // }
        // console.log(number);


  //        ENTRIES METHOD      //
  
  
        // let pin = ['x','y','z'];
        // let Post = pin.entries();
        
        // console.log(Post.next().value);  
        // console.log(Post.next().value);


  //         INCLUDES METHOD     //


        // let Car = ["BMW","FARRARI","JEGUAR","SCORPIO","RUBICON "];

        // console.log(Car.includes("BMW"));

  //          copyWhithin METHOD     //
  
        // let mobile = ["apple","mi","redmi","realme","vivo","oppo","oneluse"];
        // console.log(mobile.copyWithin(2, 0));

        // let mobile = ["apple","mi","redmi","realme","vivo","oppo","oneluse"];
        // console.log(mobile.copyWithin(2, 0,2));



                     //     ARRAY COMPLETED      //