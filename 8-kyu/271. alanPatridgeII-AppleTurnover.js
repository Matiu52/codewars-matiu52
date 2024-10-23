// https://www.codewars.com/kata/580a094553bd9ec5d800007d
// Alan Partridge II - Apple Turnover

function apple(x) {
  let moreThan1000 = "It's hotter than the sun!!";
  let underThan1000 = "Help yourself to a honeycomb Yorkie for the glovebox.";
  return Number(x) ** 2 > 1000 ? moreThan1000 : underThan1000;
}

console.log(apple("50"));
console.log(apple(4));
