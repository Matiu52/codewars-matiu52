// https://www.codewars.com/kata/5f70c883e10f9e0001c89673
// Gravity Flip

const flip = (d, a) => {
  switch (d) {
    case "R":
      return a.sort((i, j) => i - j);
    case "L":
      return a.sort((i, j) => i - j).reverse();
    default:
      break;
  }
  return;
};

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));
