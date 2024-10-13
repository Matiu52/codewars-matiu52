// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
// Area or Perimeter

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : 2 * (l + w);
};

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 9));
