//https://www.codewars.com/kata/572269697297444c570008b9/train/javascript
//noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)

// function greaterThanLessThan(a, b, c) {
//   if (a < b < c) {
//     return true;
//   }
//   return false;
// }

const greaterThanLessThan = (a, b, c) => a < b < c;

console.log(greaterThanLessThan(1, 2, 3)); //true
console.log(greaterThanLessThan(-9, -8, -7)); //false
console.log(greaterThanLessThan(-9, -8, 7)); //true
