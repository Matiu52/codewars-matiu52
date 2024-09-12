// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
// CSV representation of array

// function toCsvText(array) {
//   return array.map((row) => row.join(",")).join("\n");
// }

const toCsvText = (array) => array.map((row) => row.join(",")).join("\n");

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
