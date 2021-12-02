enum Roles { ADMIN , READ_ONLY , WRITE_ONLY }
enum Deparment {DEVELOPER= 'Developer' , TESTER = 1 , OWNER = 'Owner'}

const person ={
    name:'Vikas',
    age:25,
    role:Roles.ADMIN,
    deparment:Deparment.DEVELOPER,
}

if(person.role === Roles.ADMIN){
    console.log('is admin')
}

// enums is a typescript feature which is used to create a set of constants , like ADMIN , Read_only , Write_only etc which by default are assigned a number value starting zero or we can custamize it with number or a string value