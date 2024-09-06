//https://www.codewars.com/kata/643af0fa9fa6c406b47c5399
//Quadrants

// function quadrant(x, y) {
//   if (x < 0) {
//     if (y < 0) {
//       return 3;
//     } else {
//       return 2;
//     }
//   } else {
//     if (y < 0) {
//       return 4;
//     } else {
//       return 1;
//     }
//   }
// }

const quadrant = (x, y) => (x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3);

console.log(quadrant(3, 5));
