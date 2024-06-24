const fs = require("fs");
// file system module
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
})

// Promises ->
// It is just a class that makes callbacks and async functions slightly more readable.
// When we create it, we need to pass in a function as the first argument which has resolve as the first argument.
function nischalReadFile() {
    return new Promise( function(resolve) {
     fs.readFile("a.txt", "utf-8", function(err, data) {
        resolve(data);
     });
    })
}

// callback function to call
function onDone(data) {
    console.log(data);
}

nischalReadFile().then(onDone);

// Async await ->
function nischalAsyncFunction() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("hi there!");
        }, 2000);
    })
}

async function main() {
  // no callbacks, no .then syntax
let value = await nischalReadFile();
console.log(value);
}
main();

const p = new Promise(function() {
    setTimeout(product, 2000);
});

function product(nums) {
    const sol1 = nums * nums;
    const sol2 = sol1 * nums;
}
p.then(product(3));