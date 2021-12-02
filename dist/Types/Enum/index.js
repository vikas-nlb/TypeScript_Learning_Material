"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
    Roles[Roles["WRITE_ONLY"] = 2] = "WRITE_ONLY";
})(Roles || (Roles = {}));
var Deparment;
(function (Deparment) {
    Deparment["DEVELOPER"] = "Developer";
    Deparment[Deparment["TESTER"] = 1] = "TESTER";
    Deparment["OWNER"] = "Owner";
})(Deparment || (Deparment = {}));
var personDetails = {
    name: 'Vikas',
    age: 25,
    role: Roles.ADMIN,
    deparment: Deparment.DEVELOPER,
};
if (personDetails.role === Roles.ADMIN) {
    console.log('is admin');
}
// enums is a typescript feature which is used to create a set of constants , like ADMIN , Read_only , Write_only etc which by default are assigned a number value starting zero or we can custamize it with number or a string value
