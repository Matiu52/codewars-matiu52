// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
// Find the Difference in Age between Oldest and Youngest Family Members

// function differenceInAges(ages) {
//   let min = Math.min(...ages);
//   let max = Math.max(...ages);
//   return [min, max, max - min];
// }

const differenceInAges = (ages) => [
  Math.min(...ages),
  Math.max(...ages),
  Math.max(...ages) - Math.min(...ages),
];

console.log(differenceInAges([82, 15, 6, 38, 35]));
