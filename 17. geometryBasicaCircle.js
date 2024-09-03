//https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0/train/javascript
//Geometry Basics: Circle Area in 2D
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
  circleArea(radius) {
    Math.PI * Math.pow(radius, 2);
  }
}
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
function circleArea(circle) {
  return Math.PI * Math.pow(circle.radius, 2);
}

console.log(new Circle(new Point(10, 10), 30));
