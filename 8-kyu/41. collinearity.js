//https://www.codewars.com/kata/65ba420888906c1f86e1e680
// Collinearity
// function collinearity(x1, y1, x2, y2) {
//   return (
//     (x1 == x2 && y1 == y2) ||
//     (x1 == 0 && y1 == 0) ||
//     (x2 == 0 && y2 == 0) ||
//     (x1 == 0 && x2 == 0) ||
//     (y1 == 0 && y2 == 0) ||
//     y2 / x2 == y1 / x1
//   );
// }

function collinearity(x1, y1, x2, y2) {
  if (x1 == x2 && y1 == y2) return true;
  if ((x1 == 0 && y1 == 0) || (x2 == 0 && y2 == 0)) return true;
  if (x1 == 0 && x2 == 0) return true;
  if (y1 == 0 && y2 == 0) return true;
  return y2 * x1 == y1 * x2;
}

console.log(collinearity(1, 1, 1, 1));
console.log(collinearity(1, 2, 2, 4));
console.log(collinearity(1, 2, -1, -2));
console.log(collinearity(4, 0, 11, 0));
console.log(collinearity(0, 1, 6, 0));
console.log(collinearity(0, 0, 0, 0));
console.log(collinearity(0, 0, 1, 0));
console.log(collinearity(0, -24, 0, 28));
