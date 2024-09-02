//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// Sum of positive

// function positiveSum(arr) {
//   sum = 0;
//   arr.forEach((a) => {
//     if (a > 0) {
//       sum += a;k
//     }
//   });
//   return sum;
// }

const positiveSum = (arr) => arr.reduce((sum, a) => (a > 0 ? sum + a : sum), 0);
console.log(positiveSum([-1, 2, 3, 4, -5])); //
