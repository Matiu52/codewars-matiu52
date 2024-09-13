// https://www.codewars.com/kata/515e271a311df0350d00000f
// Square(n) Sum

// function squareSum(numbers) {
//   return numbers.reduce((acc, val) => acc + val ** 2, 0);
// }

const squareSum = (n) => n.reduce((a, v) => a + v ** 2, 0);

console.log(squareSum([0, 3, 4, 5]));
