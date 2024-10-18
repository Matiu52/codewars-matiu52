// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
// Beginner Series #2 Clock

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
