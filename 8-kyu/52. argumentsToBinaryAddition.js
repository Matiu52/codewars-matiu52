// https://www.codewars.com/kata/57642a90dee2da8dd3000161
// Arguments to Binary addition

function arr2bin(arr) {
  const sum = arr.reduce(
    (acc, val) => acc + (typeof val === "number" ? val : 0),
    0
  );
  return sum.toString(2);
}

console.log(arr2bin([1, 2, 3, 4, 5]));
console.log(arr2bin([true, true, false, 15]));
console.log(arr2bin([]));
console.log(arr2bin([1, 2, "a"]));
