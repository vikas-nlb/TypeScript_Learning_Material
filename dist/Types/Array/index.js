"use strict";
var person2 = {
    name: 'Vikas',
    age: 25,
    hobbies: ['Acting', 'Emcee']
};
for (var _i = 0, _a = person2.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
// hobbies type is infered as type  array of string , so hobby is auto matically infered as string
