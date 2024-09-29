// https://www.codewars.com/kata/58dced7b702b805b200000be
// Geometry Basics: Distance between points in 2D

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function distanceBetweenPoints(a, b) {
  let x = b.x - a.x;
  let y = b.y - a.y;
  let xy = x * x + y * y;
  return Math.sqrt(xy);
}

console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)));
