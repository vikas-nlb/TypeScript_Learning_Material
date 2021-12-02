"use strict";
var combine1 = function (input1, input2, convertionType) {
    if (typeof input1 === 'number' && typeof input2 === 'number' || convertionType === 'number') {
        return +input1 + +input2;
    }
    else if (typeof input1 === 'string' && typeof input2 === 'string' || convertionType === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return 'Invalid Input';
    }
};
var u1 = { name: 'Max', age: 30 }; // this works!
console.log(combine1(1, 2, 'number'));
console.log(combine1('12', '24', 'string'));
// in many cases rather than writing the types allowed to each variable again and again we create a custom type and assign it to variable , its like a variable for the type
