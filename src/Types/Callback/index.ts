const addAndPrint = (input1 : number , input2 : number , cb : (a : number) => void )=>{
    const result = input1 + input2;
    cb(result);
}

const printVariable = (sum : number) =>{
    console.log('Result is : ',sum)
    //return sum  - even if we return something , when we use this function as a callback function it wont give any error as using function type as void we are basically telling the complier to ignore anything returned
}

addAndPrint(10,30,(sum)=>{
    console.log('Sum is : ',sum)
})

addAndPrint(30,40,printVariable)