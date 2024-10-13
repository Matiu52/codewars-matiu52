// https://www.codewars.com/kata/570a6a46455d08ff8d001002
// No zeros for heros

function noBoringZeros(n) {
  return n !== 0 ? parseInt(n.toString().replace(/0+$/g, "")) : 0;
}

console.log(noBoringZeros(4500));
console.log(noBoringZeros(40500));
console.log(noBoringZeros(0));
