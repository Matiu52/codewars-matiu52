// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
// Invert values

// function invert(array) {
//   var arr = [];
//   for (let i = 0; i < array.length; i++) {
//     arr.push(0 - array[i]);
//   }
//   return arr;
// }

const invert = (arr) => arr.map((num) => -num);

console.log(invert([1, 2, 3, 4, 5]));
