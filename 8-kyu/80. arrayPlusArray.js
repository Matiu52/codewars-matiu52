// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// Array plus array

function arrayPlusArray(arr1, arr2) {
  return (
    arr1.reduce((acc, val) => acc + val, 0) +
    arr2.reduce((acc, val) => acc + val, 0)
  );
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
