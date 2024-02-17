function add (a : number , b : number ) : number
{
    return a+b ;
}

console.log(add(5,7));
console.log(add(5,"9"));

console.log(5,6);
console.log()


interface Hello {

    name ?: string 
    email?: string 
    age?: number
}

let person  : Hello = {

    name: "jonh" ,
    age : 30,
    // job : "Devloper"
    

}

  console.log(person);


  enum gender {
     
    "male", "female", "hello"
  }

  let x = gender.hello

  console.log(x);



  