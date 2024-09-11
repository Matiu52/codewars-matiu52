// https://www.codewars.com/kata/5899642f6e1b25935d000161
// Merge two sorted arrays into one

// function mergeArrays(arr1, arr2) {
//   var arr = [...arr1, ...arr2];
//   arr.sort((a, b) => a - b);
//   return arr;
// }

const mergeArrays = (arr1, arr2) =>
  [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
