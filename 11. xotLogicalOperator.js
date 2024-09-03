// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript
//Exclusive "or" (xor) Logical Operator

// function xor(a, b) {
//   if (a == true && b == true) {
//     return false;
//   } else if (a || b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const xor = (a, b) => (a ^ b ? true : false);

function xor(a, b) {
  return a != b;
}

console.log(xor(false, false));
console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(true, true));
