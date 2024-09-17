// https://www.codewars.com/kata/565f5825379664a26b00007c
// Surface Area and Volume of a Box

function getSize(w, h, d) {
  var area = 2 * (w * h + w * d + h * d);
  var volume = w * h * d;
  return [area, volume];
}

console.log(getSize(4, 2, 6));
