// https://www.codewars.com/kata/55ecd718f46fba02e5000029
// What is between?

function between(a, b) {
  return Array.from({ length: b + 1 - a }, (_, i) => i + a);
}

console.log(between(1, 4));
console.log(between(-2, 2));
