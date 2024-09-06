// https://www.codewars.com/kata/55a5bfaa756cfede78000026
// Super Duper Easy
// function problem(x) {
//   if (typeof x !== "number") {
//     return "Error";
//   }
//   return x * 50 + 6;
// }

const problem = (x) => (typeof x !== "number" ? "Error" : x * 50 + 6);
console.log(problem(5));
console.log(problem("Test"));
console.log(problem("Test"));
console.log(problem(""));
