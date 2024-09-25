// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
// The Wide-Mouthed frog!

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

console.log(mouthSize("alligator"));
