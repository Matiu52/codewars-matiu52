// https://www.codewars.com/kata/572b77262bedd351e9000076
// pick a set of first elements

function first(arr, n = 1) {
  if (n === 0) {
    return [];
  }
  return arr.slice(0, n);
}

console.log(first(["a", "b", "c", "d", "e"], 2));
console.log(first(["a", "b", "c", "d", "e"]));
