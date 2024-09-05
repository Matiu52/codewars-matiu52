// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// Opposites Attract

// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 == 0 || flower2 % 2 == 0) {
//     if (flower2 % 2 != 0 || flower1 % 2 != 0) {
//       return true;
//     }
//   }
//   return false;
// }

const lovefunc = (f1, f2) => f1 % 2 !== f2 % 2;
console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
