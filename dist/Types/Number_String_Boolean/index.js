"use strict";
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var button = document.getElementById('button');
function add3(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
button.addEventListener("click", function (event) {
    add3(+num1.value, +num2.value, true, 'The result');
});
//type assinemt - when we assign they type while defining like const n :number = 10;
// type inference - when we dont assign the type but the type is infered about assigning a value to the variable
