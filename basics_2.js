const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toString().length);

//console.log(balance.toFixed(2));   // Imp.

const otherNumber = 234.8567
//console.log(otherNumber.toPrecision(3));  // Imp.
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));   // 10,00,000

// Maths in JavaScript ->
// console.log(Math.PI);
// console.log(Math.abs(-5));
// console.log(Math.round(5.768));
// console.log(Math.ceil(5.768));
// console.log(Math.floor(5.768));
// console.log(Math.min(4, 5, 6, 7, 8));
// console.log(Math.max(4, 5, 6, 7, 8));

// console.log(Math.random());  // gives a random value between 0 and 1
// console.log((Math.random()*10) + 1);

// Dates and Time ->
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());   // returns date in the form of a string value
// console.log(myDate.toLocaleString());  // returns both date and time
// console.log(typeof(myDate));

let myCreatedDate = new Date(2024, 5, 3, 6, 0)
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);   // in milli seconds
console.log(Math.floor(Date.now() / 1000));  // in seconds
console.log(myCreatedDate.getTime());
console.log();

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());