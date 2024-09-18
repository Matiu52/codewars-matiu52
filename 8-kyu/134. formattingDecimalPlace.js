// https://www.codewars.com/kata/5641a03210e973055a00000d
// Formatting decimal places #0

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

console.log(twoDecimalPlaces(4.56789));
