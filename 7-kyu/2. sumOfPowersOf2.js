// https://www.codewars.com/kata/5d9f95424a336600278a9632
// Sum of powers of 2

// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
function powers(n) {
  let result = [];
  let power = BigInt(1);
  n = BigInt(n);

  while (n > 0) {
    if (BigInt(n) & power) {
      result.push(power);
      n -= power;
    }
    power <<= BigInt(1);
  }

  return result.map((bigInt) => Number(bigInt));
}

console.log(powers(6));
console.log(powers(1));
console.log(powers(2));
