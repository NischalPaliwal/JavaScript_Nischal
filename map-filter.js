// map, filter, and arrow functions
// 1. map ->
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const answer1 = arr.map((index) => {
  return index * 4;
})

console.log(answer1);

// 2. filter ->
const answer2 = arr.filter((index) => {
    if (index % 2 == 0) {
        return true;
    }
    return false;
})

console.log(answer2);
