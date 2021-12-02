"use strict";
var addAndPrint = function (input1, input2, cb) {
    var result = input1 + input2;
    cb(result);
};
var printVariable = function (sum) {
    console.log('Result is : ', sum);
    //return sum  - even if we return something , when we use this function as a callback function it wont give any error as using function type as void we are basically telling the complier to ignore anything returned
};
addAndPrint(10, 30, function (sum) {
    console.log('Sum is : ', sum);
});
addAndPrint(30, 40, printVariable);
