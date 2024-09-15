// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
// Find Multiples of a Number

// function findMultiples(integer, limit) {
//   var list = Array.from({ length: limit }, (_, i) => (i + 1) * integer);
//   var newList = [];
//   list.forEach((e) => {
//     if (e <= limit) {
//       newList.push(e);
//     }
//   });
//   return newList;
// }

const findMultiples = (i, l) =>
  Array.from({ length: Math.floor(l / i) }, (_, v) => (v + 1) * i);

console.log(findMultiples(5, 25));
