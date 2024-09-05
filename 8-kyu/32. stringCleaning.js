// https://www.codewars.com/kata/57e1e61ba396b3727c000251
// String cleaning

// function stringClean(s) {
//   return s.replace(/\d/g, "");
// }

const stringClean = (s) => s.replace(/\d/g, "");

console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"));
