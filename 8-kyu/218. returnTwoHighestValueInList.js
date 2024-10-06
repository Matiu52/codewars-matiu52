// https://www.codewars.com/kata/57ab3c09bb994429df000a4a
// Return Two Highest Values in List

function twoHighest(arr) {
  let unique = Array.from(new Set(arr));
  let sort = unique.sort((a, b) => b - a);
  return sort.slice(0, 2);
}

console.log(twoHighest([15, 20, 20, 17]));
console.log(twoHighest([]));
console.log(twoHighest([15]));
