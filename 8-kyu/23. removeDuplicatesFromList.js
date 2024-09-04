//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
//Remove duplicates from list

// function distinct(a) {
//   return [...new Set(a)];
// }

const distinct = (a) => [...new Set(a)];

console.log(distinct([1, 1, 2]));
