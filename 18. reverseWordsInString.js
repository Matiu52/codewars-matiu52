//https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript
//Reversing Words in a String

// function reverse(string) {
//   revS = [];
//   split = string.split(" ");
//   split.forEach((s) => {
//     revS.unshift(s);
//   });
//   return revS.join(" ");
// }

const reverse = (s) => s.split(" ").reverse().join(" ");
console.log(reverse("Hello World!"));
