// https://www.codewars.com/kata/56453a12fcee9a6c4700009c
// Compare within margin

function closeCompare(a, b, margin = 0) {
  if (margin === 0 || Math.abs(b - a) > margin) {
    if (a < b) {
      return -1;
    } else if (a == b) {
      return 0;
    } else {
      return 1;
    }
  } else {
    return 0;
  }
}

console.log(closeCompare(4, 5));
console.log(closeCompare(5, 5));
console.log(closeCompare(6, 5));
console.log(closeCompare(-6, -5));

console.log(closeCompare(2, 5, 3));
console.log(closeCompare(8.1, 5, 3));
console.log(closeCompare(1.99, 5, 3));
