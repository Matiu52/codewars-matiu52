//https://www.codewars.com/kata/55dc4520094bbaf50e0000cb/train/javascript
//Wilson primes

function amIWilson(p) {
  function factorial(n) {
    let result = BigInt(1);
    for (let i = BigInt(2); i <= n; i++) {
      result *= i;
    }
    return result;
  }
  const bigP = BigInt(p);
  return (
    (factorial(bigP - BigInt(1)) + BigInt(1)) % (bigP * bigP) === BigInt(0)
  );
}

console.log(amIWilson(5));
console.log(amIWilson(9));
console.log(amIWilson(6));
console.log(amIWilson(563));
