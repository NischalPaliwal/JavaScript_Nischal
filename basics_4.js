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
arr_1.push(4);  // used to push/include something in the array
console.log(arr_1);

const arr_2 = [11,12,13,14]
arr_2.pop();  // last one out
console.log(arr_2);
arr_2.shift();
console.log(arr_2);