const combine = (input1 : number , input2 : number )=>{
    return input1 + input2;
}

const printResult = (sum : number) =>{
    console.log('Result is : ',sum)
}

let combineValue : (a : number , b : number) => number;
combineValue = combine
printResult(combineValue(5,8));
