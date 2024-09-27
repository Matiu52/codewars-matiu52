// https://www.codewars.com/kata/55d277882e139d0b6000005d
// Grasshopper - Array Mean

var findAverage = function (nums) {
  let mean = nums.reduce((a, v) => a + v, 0) / nums.length;
  return mean;
};

console.log(findAverage([1, 3, 5, 7]));
