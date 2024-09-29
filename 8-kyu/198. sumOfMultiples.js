// https://www.codewars.com/kata/57241e0f440cd279b5000829
// Sum of Multiples

function sumMul(n, m) {
  if (m > n) {
    let sum = 0;
    for (let i = n; i < m; i += n) {
      sum += i;
    }
    return sum;
  } else {
    return "INVALID";
  }
}

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(4, -7));
