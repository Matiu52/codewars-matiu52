// https://www.codewars.com/kata/596e4ef7b61e25981200009f
// Aspect Ratio Cropping - Part 1

function aspectRatio(x, y) {
  return [Math.ceil((16 / 9) * y), y];
}

console.log(aspectRatio(640, 480));
console.log(aspectRatio(640, 720));
console.log(aspectRatio(640, 1080));
console.log(aspectRatio(640, 1440));
