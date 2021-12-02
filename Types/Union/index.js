var add = function (input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return 'Invalid Input';
    }
};
console.log(add(1, 2));
console.log(add('1', '2'));
