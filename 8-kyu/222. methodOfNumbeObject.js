// https://www.codewars.com/kata/57256064856584bc47000611
// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

function howManySmaller(arr, n) {
  let map = arr.map((v, i) => parseFloat(v.toFixed(2)) < n);
  let count = map.filter((v) => v === true).length;
  return count;
}
console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
