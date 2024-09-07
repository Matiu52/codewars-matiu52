// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// Sum Arrays

// Sum Numbers
// function sum(numbers) {
//   let sum = numbers.reduce((acc, val) => acc + val, 0);
//   return sum;
// }

const sum = (n) => n.reduce((a, v) => a + v, 0);

console.log(sum([1, 5.2, 4, 0, -1]));
