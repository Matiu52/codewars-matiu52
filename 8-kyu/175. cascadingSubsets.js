// https://www.codewars.com/kata/545af3d185166a3dec001190
// Enumerable Magic #20 - Cascading Subsets

function eachCons(array, n) {
  var element = [];
  for (let i = 0; i <= array.length - n; i++) {
    element.push(array.slice(i, i + n));
  }
  return element;
}

console.log(eachCons([1, 2, 3, 4], 2));
