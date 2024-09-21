// https://www.codewars.com/kata/5761a717780f8950ce001473
// How old will I be in 2099?

// function calculateAge(born, current) {
//   if (born === current) {
//     return "You were born this very year!";
//   } else if (born > current) {
//     let willBorn = born - current;
//     return willBorn > 1
//       ? `You will be born in ${willBorn} years.`
//       : `You will be born in ${willBorn} year.`;
//   } else {
//     let age = current - born;
//     return age > 1 ? `You are ${age} years old.` : `You are ${age} year old.`;
//   }
// }

function calculateAge(born, current) {
  if (born === current) return "You were born this very year!";
  const diff = Math.abs(current - born);
  const years = diff === 1 ? "year" : "years";
  return born < current
    ? `You are ${diff} ${years} old.`
    : `You will be born in ${diff} ${years}.`;
}

console.log(calculateAge(2012, 2016));
console.log(calculateAge(2000, 1999));
