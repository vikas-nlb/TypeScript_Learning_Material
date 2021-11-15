const addAndPrint = (input1 : number , input2 : number , cb : (a : number) => void )=>{
    const result = input1 + input2;
    cb(result);
}

const printVariable = (sum : number) =>{
    console.log('Result is : ',sum)
}

addAndPrint(10,30,(sum)=>{
    console.log('Sum is : ',sum)
})

addAndPrint(30,40,printVariable)