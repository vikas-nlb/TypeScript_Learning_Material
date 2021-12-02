var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
    Roles[Roles["WRITE_ONLY"] = 2] = "WRITE_ONLY";
})(Roles || (Roles = {}));
var person = {
    name: 'Vikas',
    age: 25,
    role: Roles.ADMIN
};
if (person.role === Roles.ADMIN) {
    console.log('is admin');
}
