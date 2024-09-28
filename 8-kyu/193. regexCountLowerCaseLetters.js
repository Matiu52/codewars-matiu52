// https://www.codewars.com/kata/56a946cd7bd95ccab2000055
// Regex count lowercase letters

function lowercaseCount(str) {
  let length = 0;
  if (str.length > 0 && str.match(/[a-z]/g)) {
    length = str.match(/[a-z]/g).length;
  }
  return length;
}

console.log(lowercaseCount("ABSawjad"));
console.log(lowercaseCount(""));
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
