// https://www.codewars.com/kata/5748838ce2fab90b86001b1a
// Area of a Square

function squareArea(A) {
  return Math.round(Math.pow(2 * (A / Math.PI), 2) * 100) / 100;
}

console.log(squareArea(2));
console.log(squareArea(14.05));
