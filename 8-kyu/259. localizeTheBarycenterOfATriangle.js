// https://www.codewars.com/kata/5601c5f6ba804403c7000004
// Localize The Barycenter of a Triangle

function barTriang(p1, p2, p3) {
  let x = +((p1[0] + p2[0] + p3[0]) / 3).toFixed(4);
  let y = +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4);
  return [x, y];
}

console.log(barTriang([4, 6], [12, 4], [10, 10]));
