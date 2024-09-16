// https://www.codewars.com/kata/55685cd7ad70877c23000102
// Return Negative

// function makeNegative(num) {
//   return num > 0 ? 0 - num : num;
// }

const makeNegative = (n) => (n > 0 ? 0 - n : n);

console.log(makeNegative(42));
console.log(makeNegative(-42));
