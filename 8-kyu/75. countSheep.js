// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// If you can't sleep, just count sheep!!

// var countSheep = function (num) {
//   var sheep = [];
//   for (let i = 0; i < num; i++) {
//     sheep.push(i + 1 + " sheep...");
//   }
//   return sheep.join("");
// };

const countSheep = (num) =>
  Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(2));
console.log(countSheep(0));
