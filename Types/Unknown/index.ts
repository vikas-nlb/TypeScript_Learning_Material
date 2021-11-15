let data : unknown;
let newData : string;
let latestData : any;

//newData = data;  this would give an error
newData = latestData;
latestData = 10
data = 'Vikas'  

if( typeof data === 'string' ){
    newData = data;
}

// any type and unknown type appears same , but with any type the compiler allows it to run like js , but with unknown type it checks and doesnt allow any other variable with defined type be assigned with unknown type variable