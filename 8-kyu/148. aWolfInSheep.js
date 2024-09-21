// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
// A wolf in sheep's clothing

function warnTheSheep(queue) {
  let indexWolf = queue.indexOf("wolf");
  let countSheep = queue.length - 1 - indexWolf;
  return countSheep > 0
    ? `Oi! Sheep number ${countSheep}! You are about to be eaten by a wolf!`
    : "Pls go away and stop eating my sheep";
}

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
);
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
