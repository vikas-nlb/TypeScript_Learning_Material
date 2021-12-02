const combine = (input1 : number , input2 : number ):number=>{
    return input1 + input2;
}

const printResult = (sum : number) =>{
    console.log('Result is : ',sum)
} // type of function is void as nothing is returned

let combineValue : (a : number , b : number) => number;
// function as type , here in combineValue rather than defining type as Function we have explicityly defined it as (a : number , b : number) => number becasue we are passing two arguments and returning a number and if we had only defined it as Function any function could have been assigned and no error would have been thrown

combineValue = combine
printResult(combineValue(5,8));


// Function type allows us to declare return types for functions and if there nothing to return type would be void