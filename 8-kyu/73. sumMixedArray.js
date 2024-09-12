// https://www.codewars.com/kata/57eaeb9578748ff92a000009
// Sum Mixed Array
// function sumMix(x) {
//   return x.reduce((acc, val) => acc + Number(val), 0);
// }

const sumMix = (x) => x.reduce((acc, val) => acc + Number(val), 0);

console.log(sumMix([9, 3, "7", "3"]));
