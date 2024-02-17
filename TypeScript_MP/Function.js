function add(a, b) {
    return a + b;
}
console.log(add(5, 7));
console.log(add(5, "9"));
console.log(5, 6);
console.log();
var person = {
    name: "jonh",
    age: 30,
    // job : "Devloper"
};
console.log(person);
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["hello"] = 2] = "hello";
})(gender || (gender = {}));
var x = gender.hello;
console.log(x);
