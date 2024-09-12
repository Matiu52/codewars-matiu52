// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
// Calculate average

// function findAverage(array) {
//   var avg = array.reduce((a, v) => a + v, 0) / array.length;
//   return avg ? avg : 0;
// }

const findAverage = (array) =>
  array.length ? array.reduce((a, v) => a + v, 0) / array.length : 0;

console.log(findAverage([1, 2, 3]));
console.log(findAverage([]));
