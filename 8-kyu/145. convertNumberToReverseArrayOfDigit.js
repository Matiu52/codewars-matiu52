// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// Convert number to reversed array of digits

function digitize(n) {
  return n.toString().split("").reverse("").map(Number);
}

console.log(digitize(35231));
