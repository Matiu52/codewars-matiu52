// https://www.codewars.com/kata/59ca8246d751df55cc00014c
// Is he gonna survive?

// function hero(bullets, dragons) {
//   return bullets / dragons >= 2;
// }

const hero = (b, d) => b / d >= 2;

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(1500, 751));
console.log(hero(100, 40));
