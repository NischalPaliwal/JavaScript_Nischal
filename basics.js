// Assigning Values ->
const accountId = 45
let accountMail = "nischal@gmail.com"
let accountPassword = "23432"
let accountCity = "Jaipur"
// Printing Values ->
console.log(accountId)
console.log(accountMail)
console.table([accountId,accountMail,accountPassword,accountCity])
"use strict" // treat all JS code as newer version

// Data Types and their Conversion ->
let score1 = 33
let score2 = "33abc"
let valueInNumber = Number(score2)
console.table([typeof(score1),typeof(score2),typeof(valueInNumber),valueInNumber])

score2 = null
valueInNumber = Number(score2)
console.table([typeof(score2),typeof(valueInNumber),valueInNumber])

score2 = undefined
valueInNumber = Number(score2)
console.table([typeof(score2),typeof(valueInNumber),valueInNumber])

score2 = true
valueInNumber = Number(score2)
console.table([typeof(score2),typeof(valueInNumber),valueInNumber])

let a = ""
let bool = Boolean(a)
console.log(bool)

a = "nischal"
bool = Boolean(a)
console.log(bool)

// 1 => true; 0 => false
// "" => false; "nischal" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

// Operations ->
// Includes simple mathematical operations such as addition, subtraction, multiplication, division, modulus, string, bitwise operations, etc.
// power operation -
console.log(3**4);
let str1 = "hello"
let str2 = " world"
console.log(str1 + str2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(2 + 2 + "1");

let gameCounter = 100
gameCounter++
console.log(gameCounter);  // Increment Operator

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// 