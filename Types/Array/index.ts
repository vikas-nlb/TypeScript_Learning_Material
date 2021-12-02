const person2 = {
    name: 'Vikas',
    age: 25,
    hobbies: ['Acting', 'Emcee']
}

for(const hobby of person2.hobbies) {
    console.log(hobby)

}

// hobbies type is infered as type  array of string , so hobby is auto matically infered as string