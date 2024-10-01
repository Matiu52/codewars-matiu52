// https://www.codewars.com/kata/58cb43f4256836ed95000f97
// Difference of Volumes of Cuboids

function findDifference(a, b) {
  return Math.abs(a.reduce((a, v) => a * v, 1) - b.reduce((a, v) => a * v, 1));
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
