const person = {
    name: 'Vikas',
    age: 25
} // we ket the complier infer the type of the object

const person1: {
    name: string,
    age: number
} = {
    name: 'Vikas',
    age: 25
}

console.log(person.name)
console.log(person1.name)