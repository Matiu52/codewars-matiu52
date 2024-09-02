// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// Remove First and Last Character

// function removeChar(str) {
//   str = Array.from(str);
//   removeStr = [];
//   for (let i = 1; i < str.length - 1; i++) {
//     removeStr.push(str[i]);
//   }
//   return removeStr.join("");
// }
const removeChar = (str) => str.slice(1, -1);
console.log(removeChar("place"));
