// https://www.codewars.com/kata/54edbc7200b811e956000556
// Counting sheep...

function countSheeps(sheep) {
  return sheep.reduce((a, v) => (v === true ? (a += 1) : (a += 0)), 0);
}

console.log(countSheeps([undefined, null, false, true]));
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
