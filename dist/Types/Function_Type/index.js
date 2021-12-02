"use strict";
var combine2 = function (input1, input2) {
    return input1 + input2;
};
var printResult1 = function (sum) {
    console.log('Result is : ', sum);
}; // type of function is void as nothing is returned
var combineValue;
// function as type , here in combineValue rather than defining type as Function we have explicityly defined it as (a : number , b : number) => number becasue we are passing two arguments and returning a number and if we had only defined it as Function any function could have been assigned and no error would have been thrown
combineValue = combine2;
printResult1(combineValue(5, 8));
// Function type allows us to declare return types for functions and if there nothing to return type would be void
