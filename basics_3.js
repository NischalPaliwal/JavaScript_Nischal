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
    //   console.log(reference);
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
// sum(45,67, displayResultPassive);

// JavaScript Callbacks ->
// A callback is a function passed as an argument to another function, which gets invoked after the main function completes its execution.
function callback(a, b, callbackFunction) {
    let value = a * b;
    callbackFunction(value);
}
function show(arg) {
    console.log(arg);
}
// callback(3, 2, show);

// setTimeout Function ->
// It's a global function in JavaScript which gets called after a certain interval of time as specified by the user.
function greet() {
    console.log("Hello Everyone!!");
}
// setTimeout(greet, 5 * 1000);

// setInterval Function ->
// setInterval(greet, 2 * 1000);

// String Functions ->
// 1. Length
    function getLength(str) {
     console.log("Original String:", str);
     console.log("Length:", str.length);
   }
//    getLength("Hello World");
// 2. indexOf
function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
//  findIndexOf("Hello World", "World"); 
// 3. lastIndexOf
function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
//  findLastIndexOf("Hello World World", "World");  
// 4. slice
function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 7);   // does not consider the second index passed in the parameter
// 5. substring
function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 7);   // does not consider the second index passed in the parameter
  
  // 6. replace
  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
//  replaceString("Hello World", "World", "JavaScript");
  
  // 7. split
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
//  splitString("Hello World", " ");
  
  // 8. trim
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
//  trimString("  Hello World  ");
  
  // 9. toUpperCase
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
//  toUpper("Hello World");
  
  // 10. toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
//  toLower("Hello World");       