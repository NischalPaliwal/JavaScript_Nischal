// const readlineSync = require('readline-sync');
// const name = readlineSync.question("Enter your name: ");
// console.log("Hello " + name);

// Array of Objects ->
let users = [{
    name: "Nischal",
    age: 19,
    gender: "male"
},
{
    name: "Saransh",
    age: 22,
    gender: "male"
},
{
    name: "Ankit",
    age: 18,
    gender: "male"
}]

for (let i = 0; i < users.length; i++) {
    if (users[i]["gender"] == "male") {
       // console.log(users["name"]);
    }
}

for (let i = 0 ; i < users.length; i++) {
    if (users[i].gender == "male") {
       // console.log(users[i].name);
    }
}

// Finding the maximum value in a sorted array ->
let arr = [1, 2, 3, 4, 5, 6, 7, 12, 24];
let reference = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
       reference = arr[i + 1]; 
    }
    else {
       console.log(reference);
    }
}

// Functions in JavaScript ->
function sum(a, b, fnTOCall) {
    let answer = a + b;
    fnTOCall(answer);
}
function displayResult(c) {
    console.log("Result of this operation is " + c + ".");
}
function displayResultPassive(d) {
    console.log("This operation's result is " + d + ".");
}
sum(45,67, displayResultPassive);

// JavaScript Callbacks ->
// A callback is a function passed as an argument to another function, which gets invoked after the main function completes its execution.
function callback(a, b, callbackFunction) {
    let value = a * b;
    callbackFunction(value);
}
function show(arg) {
    console.log(arg);
}
callback(3, 2, show);

// SetTimeOut Function ->
// It's a global function in JavaScript which gets called after a certain interval of time as specified by the user.
