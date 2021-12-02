var combine = function (input1, input2, convertionType) {
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
console.log(combine(1, 2, 'number'));
console.log(combine('12', '24', 'string'));
