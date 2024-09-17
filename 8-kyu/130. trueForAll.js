// https://www.codewars.com/kata/54598d1fcbae2ae05200112c
// Enumerable Magic #1 - True for All?

// function all(arr, fun) {
//   var check = [];
//   arr.forEach((a) => {
//     check.push(fun(a));
//   });
//   return !check.some((v) => v == false) ? true : false;
// }

const all = (arr, fn) => arr.every(fn);

console.log(all([1, 2, 3, 4, 5, 6, 7, 8, 9], (fn = (v) => v < 9)));
console.log(all([1, 2, 3, 4, 5], (fn = (v) => v > 9)));
