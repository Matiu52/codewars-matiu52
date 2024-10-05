// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// Find the first non-consecutive number

function firstNonConsecutive(arr) {
  let noC = [];
  for (let i = 0; i < arr.length; i++) {
    noC.push(arr[i] == arr[i + 1] - 1);
  }
  return arr[noC.indexOf(false) + 1] ?? null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4]));
