// https://www.codewars.com/kata/56b1f01c247c01db92000076
// Double Char

// function doubleChar(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//     arr.push(str[i]);
//   }
//   return arr.join("");
// }

// const doubleChar = (s) =>
//   s
//     .split("")
//     .map((char) => char + char)
//     .join("");

const doubleChar = (s) => {
  arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
    arr.push(s[i]);
  }
  return arr.join("");
};

console.log(doubleChar("abcd"));
