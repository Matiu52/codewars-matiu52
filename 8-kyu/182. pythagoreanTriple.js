// https://www.codewars.com/kata/5951d30ce99cf2467e000013
// Pythagorean Triple

function isPythagoreanTriple(integers) {
  let sort = integers.sort((a, b) => a - b);
  let a = sort[0],
    b = sort[1],
    c = sort[2];
  return a * a + b * b === c * c;
}

console.log(isPythagoreanTriple([13, 12, 5]));
