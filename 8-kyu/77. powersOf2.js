// https://www.codewars.com/kata/57a083a57cb1f31db7000028
// Powers of 2

// function powersOfTwo(n) {
//   let pow = [];
//   for (let i = 0; i <= n; i++) {
//     pow.push(Math.pow(2, i));
//   }
//   return pow;
// }

const powersOfTwo = (n) => Array.from({ length: n + 1 }, (_, i) => 2 ** i);

console.log(powersOfTwo(4));
