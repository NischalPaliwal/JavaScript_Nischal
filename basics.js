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



