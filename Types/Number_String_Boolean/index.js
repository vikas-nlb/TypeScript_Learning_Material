var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var button = document.getElementById('button');
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
button.addEventListener("click", function (event) {
    add(+num1.value, +num2.value, true, 'The result');
});
