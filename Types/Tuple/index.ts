let tupleType : [number,string] = [25,'Vikas']

tupleType[1]='Skanda'
tupleType[0]=21
tupleType.push('Vikas/kishen') // actually this shouldn't work , but tuple doesn't support push so when we push items into an array the logic of tuples doesn't work
console.log(tupleType)