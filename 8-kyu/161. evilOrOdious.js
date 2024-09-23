// https://www.codewars.com/kata/56fcfad9c7e1fa2472000034
// Evil or Odious

function evil(n) {
  return n.toString(2).match(/1/g).length % 2 ? "It's Odious!" : "It's Evil!";
}

console.log(evil(1));
console.log(evil(2));
console.log(evil(3));
console.log(evil(4));
console.log(evil(5));
console.log(evil(6));
