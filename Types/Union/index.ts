const add = (input1 : number | string , input2 : number | string)=>{
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        return input1 + input2;
    }else if(typeof input1 === 'string' && typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }else{
        return 'Invalid Input';
    }
}

console.log(add(1,2));
console.log(add('1','2'));

// union type allows users to decide between few types to choose from when they are assigning values to a variable