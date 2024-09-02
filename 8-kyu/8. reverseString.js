// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// Reverse String

// function solution(str) {
//   str = Array.from(str);
//   strRev = [];
//   str.forEach((s) => {
//     strRev.unshift(s);
//   });
//   return strRev.join("");
// }

solution = (str) => {
  return [...str].reverse().join("");
};

console.log(solution("hello"));
