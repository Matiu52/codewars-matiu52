// https://www.codewars.com/kata/5708f682c69b48047b000e07
// Multiply the number

function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

console.log(multiply(10));
console.log(multiply(-2));
console.log(multiply(-3));
