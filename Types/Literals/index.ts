const combine = (input1 : number | string , input2 : number | string , convertionType: 'number' | 'string' )=>{
    if(typeof input1 === 'number' && typeof input2 === 'number' || convertionType === 'number'){
        return +input1 + +input2;
    }else if(typeof input1 === 'string' && typeof input2 === 'string' || convertionType === 'string'){
        return input1.toString() + input2.toString();
    }else{
        return 'Invalid Input';
    }
}

console.log(combine(1,2,'string'));
console.log(combine('1','2','number'));
