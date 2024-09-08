// https://www.codewars.com/kata/50654ddff44f800200000007
// Short Long Short

// function solution(a, b) {
//   if (a.length > b.length) {
//     return b + a + b;
//   }
//   if (a.length < b.length) {
//     return a + b + a;
//   }
// }

const solution = (a, b) => (a.length > b.length ? b + a + b : a + b + a);

console.log(solution("u", "false"));
