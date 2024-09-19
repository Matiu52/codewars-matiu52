// https://www.codewars.com/kata/573f5c61e7752709df0005d2
// Merging sorted integer arrays (without duplicates)

function mergeArrays(a, b) {
  return [...a, ...b]
    .sort((a, b) => a - b)
    .filter((v, i, self) => self.indexOf(v) === i);
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
