// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
//Cat years, Dog years

// var humanYearsCatYearsDogYears = function (humanYears) {
//   if (humanYears == 1) {
//     return [1, 15, 15];
//   }
//   if (humanYears == 2) {
//     return [2, 24, 24];
//   }
//   if (humanYears > 2) {
//     return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
//   }
// };

const humanYearsCatYearsDogYears = (y) => [
  y,
  15 + (y > 1) * 9 + (y > 2 && y - 2) * 4,
  15 + (y > 1) * 9 + (y > 2 && y - 2) * 5,
];
console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
