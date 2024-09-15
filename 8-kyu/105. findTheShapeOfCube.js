// https://www.codewars.com/kata/58d248c7012397a81800005c
// Find out whether the shape is a cube

// function cubeChecker(volume, side) {
//   return volume !== 0 ? volume === Math.abs(side ** 3) : false;
// }

const cubeChecker = (v, s) => (v !== 0 && s > 0 ? v === s ** 3 : false);

console.log(cubeChecker(8, 3));
console.log(cubeChecker(-8, -2));
console.log(cubeChecker(1, 5));
console.log(cubeChecker(0, 0));
console.log(cubeChecker(125, -5));
