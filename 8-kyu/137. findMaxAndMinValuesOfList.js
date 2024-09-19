// https://www.codewars.com/kata/577a98a6ae28071780000989
// Find Maximum and Minimum Values of a List

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

console.log(min([1, 2, 3, 4, 5]));
console.log(max([1, 2, 3, 4, 5]));
