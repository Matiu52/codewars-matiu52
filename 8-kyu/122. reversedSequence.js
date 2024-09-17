// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Reversed sequence

// const reverseSeq = (n) => {
//   return Array.from({ length: n }, (_, i) => n - i);
// };

const reverseSeq = (n) => Array.from({ length: n }, (_, i) => n - i);

console.log(reverseSeq(5));
