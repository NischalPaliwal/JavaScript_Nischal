const fs = require("fs");
// file system module
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
})

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