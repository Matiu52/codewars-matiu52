// https://www.codewars.com/kata/59811fd8a070625d4c000013
// Find the Integral

function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}

console.log(integrate(90, 2));
