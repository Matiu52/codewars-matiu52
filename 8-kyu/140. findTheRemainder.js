// https://www.codewars.com/kata/524f5125ad9c12894e00003f
// Find the Remainder

function remainder(n, m) {
  return n > m ? n % m : m % n;
}

console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(0, -1));
console.log(remainder(0, 1));
