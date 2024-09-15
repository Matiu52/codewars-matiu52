// https://www.codewars.com/kata/576b93db1129fcf2200001e6
// Sum without highest and lowest number

function sumArray(array) {
  return !array
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, array.length - 1)
        .reduce((a, v) => a + v, 0);
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([]));
console.log(sumArray([null]));
