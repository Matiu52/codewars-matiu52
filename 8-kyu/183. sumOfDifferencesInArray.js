// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
// Sum of differences in array

function sumOfDifferences(arr) {
  let sort = arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < sort.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }
  return sum;
}

console.log(sumOfDifferences([2, 1, 10]));
