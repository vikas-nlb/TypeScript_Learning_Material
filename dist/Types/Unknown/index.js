"use strict";
var data;
var newData;
var latestData;
//newData = data;  this would give an error
newData = latestData;
latestData = 10;
data = 'Vikas';
if (typeof data === 'string') {
    newData = data;
}
// any type and unknown type appears same , but with any type the compiler allows it to run like js , but with unknown type it checks and doesnt allow any other variable with defined type be assigned with unknown type variable
// unknown type works very similar to any but is very different in that it doesnt allow any other variable with defined type be assigned with unknown type variable , example v:string can be assigned with any variable with unknown type , for this to happen the type of the unkown element should be checked which will be based on the last assignment to the unkonwn variable and then only can we assign it to v of type string
