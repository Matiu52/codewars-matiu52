// https://www.codewars.com/kata/57bfea4cb19505912900012c
// Points of Reflection

// function symmetricPoint(p, q) {
//   let point = [q[0] * 2 - p[0], q[1] * 2 - p[1]];
//   return point;
// }

const symmetricPoint = (p, q) => [q[0] * 2 - p[0], q[1] * 2 - p[1]];

console.log(symmetricPoint([0, 0], [1, 1]));
console.log(symmetricPoint([2, 6], [-2, -6]));
console.log(symmetricPoint([1, -35], [-12, 1]));
