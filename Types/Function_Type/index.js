var combine = function (input1, input2) {
    return input1 + input2;
};
var printResult = function (sum) {
    console.log('Result is : ', sum);
};
var combineValue;
combineValue = combine;
printResult(combineValue(5, 8));
