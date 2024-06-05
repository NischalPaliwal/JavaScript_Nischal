const readlineSync = require('readline-sync');
const name = readlineSync.question("Enter your name: ");
console.log("Hello " + name);