// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// Count by X

// function countBy(x, n) {
//   let z = new Array(n).fill(x).map((_, i) => (i + 1) * x);
//   return z;
// }

function countBy(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
console.log(countBy(3, 5));
