// enum leptop {
//     "window","macbook"
// }
// console.log(leptop.window);
var StatusCode;
(function (StatusCode) {
    StatusCode["Success"] = "101";
    StatusCode["NotFound"] = "Error 402";
    StatusCode["InProcess"] = "Error 999";
    StatusCode["Accepted"] = " 201";
    StatusCode["BadRequest"] = "Error 503";
})(StatusCode || (StatusCode = {}));
;
console.log(StatusCode.Accepted);
console.log(StatusCode.NotFound);
console.log(StatusCode.InProcess);
