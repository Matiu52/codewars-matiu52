// https://www.codewars.com/kata/5d59576768ba810001f1f8d6
// Quadratic Coefficients Solver

function quadratic(x1, x2) {
  return [1, -x1 + -x2, -x2 * -x1];
}

console.log(quadratic(0, 1));
