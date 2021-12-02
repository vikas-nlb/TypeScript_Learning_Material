const num1 = document.getElementById('num1')! as HTMLInputElement;
const num2 = document.getElementById('num2')! as HTMLInputElement;
const button = document.getElementById('button');

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    let result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result;
    }

}

button.addEventListener("click", function (event) {
    add(+num1.value, +num2.value,true,'The result')
})

//type assinemt - when we assign they type while defining like const n :number = 10;
// type inference - when we dont assign the type but the type is infered about assigning a value to the variable