// Number Functions ->
// 1. parseInt
// This function converts the desired string into an integer.
console.log(parseInt("42"));  // converts string into an integer
console.log(parseInt("42fnfjbdk"));  // erases the scrap after the integer values
console.log(parseInt("4.645"));  // converts floating values in string format to integer values
// 2. parseFloat
// This function converts the desired string into a float value.
console.log(parseFloat("42"));
console.log(parseFloat("42fnfjbdk"));
console.log(parseFloat("4.645"));

// Array Functions ->
// 1. push
const arr_1 = [1, 2, 3]
arr_1.push(4);  // used to push/include something in the array(from back)
console.log(arr_1);

const arr_2 = [11, 12, 13, 14]
arr_2.pop();  // last one out
console.log(arr_2);
arr_2.shift();  // first one out
console.log(arr_2);
arr_2.unshift(11);  // add from the front
console.log(arr_2);

const initial_Array = [1, 2, 3, 4]
const final_Array = [5, 6, 7, 8]
console.log(initial_Array.concat(final_Array));  // concatenation of two arrays

function printEach(ptr) {
console.log(ptr);
}
initial_Array.forEach(printEach);   // calls a certain function for each value/element of the array | callbacks

// similar objects without the use of class
const dog = {
    name: "dog",
    legsCount: 4,
    speak: "barks"
}

const cat = {
    name: "cat",
    legsCount: 4,
    speak: "meows"
}

function printf(animal) {
    console.log(animal.name + " has " + animal.legsCount + " legs and it " + animal.speak);
}
printf(dog);
printf(cat);

// now using the concept of class
class Building {
    constructor(color, height, floor) {
     this.color = color;
     this.height = height;
     this.floor = floor;
    }
    static secure() {         // this function can be called by its class
        console.log("Safety should be ensured!");
    }
    demo() {       // this function can be called/accessed by the object of its class
        console.log("This beautiful building of " + this.color + " color and height " + this.height + "m has around " + this.floor + " floors.");
    }
}
let ananta = new Building("white", 100, 12);   // object of class Building
let lodha = new Building("yellow", 140, 23);   // object of class Building
ananta.demo();       // object function
lodha.demo();        // object function
Building.secure();   // class function

// Dates ->
const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getDate());
console.log(currentDate.getMonth() + 1);    // +1
console.log(currentDate.getFullYear());
// currentDate.setDate(23);
// currentDate.setMonth(3);      // +1
// currentDate.setFullYear(2025);
// console.log(currentDate);

console.log("Time in milliseconds since 1970: " + currentDate.getTime());     // epoch timestamp

// Calculating the running time of a program ->
// const before_Date = new Date();
// const before_Time = before_Date.getTime(); 

// let initial_Value = 0;
// for (let i = 0; i < 1000000000; i++) {
//     initial_Value += i;
// }

// const after_Date = new Date();
// const after_Time = after_Date.getTime(); 

// console.log(after_Time - before_Time);

// JSON (JavaScript Object Notation) ->
// JSON.parse
// JSON.stringify

const initial_Object = {
    length: 23,
    width: 45,
    height: 71
}
const final_String = JSON.stringify(initial_Object);
console.log(final_String);

const initial_String = '{"name": "Nischal Paliwal", "age": 19, "city": "jaipur"}'
const final_Object = JSON.parse(initial_String);
console.log(final_Object);

// Math Functions ->
console.log(Math.random());    // gives a random value between 0 and 1
console.log(Math.floor(3.456));  // 3  // gives the biggest number smaller than a float value
console.log(Math.ceil(3.456));   // 4  // gives the smallest number greater than a float value
console.log(Math.max(12, 23, 65));
console.log(Math.min(1, 2, 3));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(121));

// Object Functions ->
const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
let keys = Object.keys(sampleObject);
console.log(keys);
let values = Object.values(sampleObject);
console.log(values);
let entries = Object.entries(sampleObject);
console.log(entries);
let hasProp = sampleObject.hasOwnProperty("key2");
console.log(hasProp);
let new_Obj = Object.assign({}, sampleObject, {key4: "value4"});
console.log(new_Obj);

// Anonymous Functions in JavaScript ->
// It is a function that does not have any name associated with it.
// In anonymous functions in JavaScript, we use only the function keyword without the function name.
// It can only be stored in a variable as a value.

const greet = function() {
    console.log("Welcome to my city!");
}
greet();

// Using anonymous function with callbacks ->
function operation(x, y, fn) {
    let val1 = fn(x);
    let val2 = fn(y);
    return val1 + val2;
}
const soln = operation(4, 5, function(n) {
    return n * n;
});
console.log(soln);

// Synchronous and Asynchronous functions in JS ->
// Asynchronous fs methods do not block the event loop and handle multiple operations simultaneously.
// While Synchronous fs methods block the event loop until the operation completes.
function Sum() {
let ans = 0;
for(let i = 0; i < 100; i++) {
    ans += i;
}
return ans;
}
setTimeout(Sum, 3 * 1000);      // When using 'setTimeout function', the function to be called should not contain the parameters.
console.log("Hello World");