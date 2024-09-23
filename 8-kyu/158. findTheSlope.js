// https://www.codewars.com/kata/55a75e2d0803fea18f00009d
// Find the Slope

function slope(points) {
  if (points[2] - points[0] == 0) {
    return "undefined";
  }
  return ((points[3] - points[1]) / (points[2] - points[0])).toString();
}

console.log(slope([19, 3, 20, 3]));
console.log(slope([2, 7, 4, -7]));
console.log(slope([-10, 6, -10, 3]));
