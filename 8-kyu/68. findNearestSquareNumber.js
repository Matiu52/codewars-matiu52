// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
// Find Nearest square number

function nearestSq(n) {
  var pow1 = Math.pow(Math.floor(Math.sqrt(n)), 2);
  var pow2 = Math.pow(Math.floor(Math.sqrt(n)) + 1, 2);
  return ~(pow1 - n) + 1 < pow2 - n ? pow1 : pow2;
}

console.log(nearestSq(2));
console.log(nearestSq(1));
console.log(nearestSq(111));
