// https://www.codewars.com/kata/57f780909f7e8e3183000078
// Beginner - Reduce but Grow

function grow(x) {
  return x.reduce((a, v) => a * v, 1);
}

console.log(grow([1, 2, 3]));
