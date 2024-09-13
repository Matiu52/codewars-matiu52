// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
// Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  return Math.floor((s * 100000) / (60 * 60));
}

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(0.22));
