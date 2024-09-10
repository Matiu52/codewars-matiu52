// https://www.codewars.com/kata/568d0dd208ee69389d000016
// Transportation on vacation

// function rentalCarCost(d) {
//   if (d < 3) {
//     return d * 40;
//   }
//   if (d < 7) {
//     return (d - 1) * 40 + 20;
//   }
//   if (d > 6) {
//     return (d - 2) * 40 + 30;
//   }
// }

const rentalCarCost = (d) =>
  d > 6 ? (d - 2) * 40 + 30 : d > 2 ? (d - 1) * 40 + 20 : d * 40;

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(7));
