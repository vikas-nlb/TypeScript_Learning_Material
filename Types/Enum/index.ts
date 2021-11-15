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