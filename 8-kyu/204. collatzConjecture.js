// https://www.codewars.com/kata/577a6e90d48e51c55e000217
// Collatz Conjecture (3n+1)
var hotpo = function (n, count = 0) {
  if (n == 0 || n == 1) return count;
  if (n % 2 == 0) {
    count += 1;
    return hotpo(n / 2, count);
  } else {
    count += 1;
    return hotpo(3 * n + 1, count);
  }
};

console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));
