const person3 = {
    name: 'Vikas',
    age: 25
} // we ket the complier infer the type of the object

const person4: {
    name: string,
    age: number
} = {
    name: 'Vikas',
    age: 25
}

console.log(person3.name)
console.log(person4.name)