//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// Summation
// var summation = function (num) {
//   let sum = 0;
//   for (let i = 1; i < num + 1; i++) {
//     sum += i;
//   }
//   return sum;
// };
const summation = (n) => (n * (n + 1)) / 2;
console.log(summation(8));
