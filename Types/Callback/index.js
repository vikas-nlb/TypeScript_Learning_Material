var addAndPrint = function (input1, input2, cb) {
    var result = input1 + input2;
    cb(result);
};
var printVariable = function (sum) {
    console.log('Result is : ', sum);
};
addAndPrint(10, 30, function (sum) {
    console.log('Sum is : ', sum);
});
addAndPrint(30, 40, printVariable);
