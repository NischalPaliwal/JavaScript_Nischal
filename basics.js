// Assigning Values ->
const accountId = 45
let accountMail = "nischal@gmail.com"
let accountPassword = "23432"
let accountCity = "Jaipur"
// Printing Values ->
// console.log(accountId)
// console.log(accountMail)
// console.table([accountId,accountMail,accountPassword,accountCity])
"use strict" // treat all JS code as newer version

// Data Types and their Conversion ->
let score1 = 33
let score2 = "33abc"
let valueInNumber = Number(score2)
// console.table([typeof(score1),typeof(score2),typeof(valueInNumber),valueInNumber])

score2 = null
valueInNumber = Number(score2)
// console.table([typeof(score2),typeof(valueInNumber),valueInNumber])

score2 = undefined
valueInNumber = Number(score2)
// console.table([typeof(score2),typeof(valueInNumber),valueInNumber])

score2 = true
valueInNumber = Number(score2)
// console.table([typeof(score2),typeof(valueInNumber),valueInNumber])

let a = ""
let bool = Boolean(a)
// console.log(bool)

a = "nischal"
bool = Boolean(a)
// console.log(bool)

// 1 => true; 0 => false
// "" => false; "nischal" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof(stringNumber));

// Operations ->
// Includes simple mathematical operations such as addition, subtraction, multiplication, division, modulus, string, bitwise operations, etc.
// power operation -
// console.log(3**4);
let str1 = "hello"
let str2 = " world"
// console.log(str1 + str2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(2 + 2 + "1");

let gameCounter = 100
gameCounter++
// console.log(gameCounter);  // Increment Operator

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// "===" Operator ->
// console.log("2" === 2);  // "Strict Comparison" - In this both value and data type of the operands is checked.
// console.log("2" == 2);   // Here String data type value converts into number.

// Data Types (theory) ->
// Data Types are classified on the basis of their "memory allocation" and "access".
// 1. Primitive
// It includes : String, Number, Boolean, null, undefined, Symbol, BigInt.

// 2. Non - Primitive(Reference)
// Arrays, Objects, Functions

let id = Symbol('123')
let anotherId = Symbol('123')
// console.log();
// console.log(id === anotherId);

let bigNumber = 2345654456788n

let myArr = [8,2,3,9,1]
let myObj = {
    name : "Nischal",
    age : 18
}
// console.log(typeof(bigNumber));
// console.log(typeof(myArr));
// console.log(typeof(myObj));

// console.log(myArr);
// console.log(myObj);

// Stack and Heap Memory ->
// 1. Stack Memory
// In JavaScript, primitive values like strings, numbers, boolean, null and undefined are stored in the stack.
// References that points to objects and functions are also included in the stack.
// It is a data structure used to store static data.
// A fixed amount of memory is allocated for static data.


// 2. Heap Memory
// It is used to store objects and functions in JavaScript.
// The engine doesn’t allocate a fixed amount of memory to Heap.
// Instead, it allocates more space as required.


let s1 = "I am a Software Developer"
let s2 = new String("I work at Goldman Sachs")
// console.log(s1[5]);
// console.log(s2[5]);
// console.log(s1.length);
// console.log(s2.length);
let s3 = s1
s1 = "Hello World"
console.log(s3);
console.log(s1);
console.log(s2.toUpperCase());
console.log(s2.charAt(4));
console.log(s2.indexOf('r'));
console.log(s2.substring(0,6));  // character at second index in the substring function is not printed.
console.log(s2.slice(0,6));  // slice function also obeys negative values.

let s4 = "     hello world     "
console.log(s4);
console.log(s4.trim());  // removes front and back spaces
console.log(s4.replace("hello","hi"));
console.log(s4.includes("world"));

console.log(s1.split(" "));  // splits the string with respect to a reference into an array of substrings of that string.

// Placeholders in JavaScript ->
// In JavaScript, ${} is used as a placeholder. And all the content to be printed should be confined in " ` " symbols.
let place_num = 18
let place_string = "Nischal"
console.log(`My name is ${place_string} and I am ${place_num} years old.`);
