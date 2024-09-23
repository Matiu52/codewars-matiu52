// https://www.codewars.com/kata/57b58827d2a31c57720012e8
// Fuel Calculator: Total Cost

// 2 => 5
// 4 => 10
// 6 => 15
// 8 => 20
// 10 => 25

// function fuelPrice(litres, pricePerLitre) {
//   if (litres > 9) {
//     return Number((litres * (pricePerLitre - 0.25)).toFixed(2));
//   } else if (litres > 7) {
//     return Number((litres * (pricePerLitre - 0.2)).toFixed(2));
//   } else if (litres > 5) {
//     return Number((litres * (pricePerLitre - 0.15)).toFixed(2));
//   } else if (litres > 3) {
//     return Number((litres * (pricePerLitre - 0.1)).toFixed(2));
//   } else {
//     return Number((litres * (pricePerLitre - 0.05)).toFixed(2));
//   }
// }

const fuelPrice = (l, p) =>
  Number(
    (
      l *
      (p - (l > 9 ? 0.25 : l > 7 ? 0.2 : l > 5 ? 0.15 : l > 3 ? 0.1 : 0.05))
    ).toFixed(2)
  );

console.log(fuelPrice(5, 1.23));
console.log(fuelPrice(8, 2.5));
