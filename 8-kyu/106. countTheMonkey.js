// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// Count the Monkeys!

function monkeyCount(n) {
  return Array.from({ length: n }, (_, v) => v + 1);
}

console.log(monkeyCount(10));
