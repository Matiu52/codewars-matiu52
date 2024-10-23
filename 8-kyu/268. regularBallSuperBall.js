// https://www.codewars.com/kata/53f0f358b9cb376eca001079
// Regular Ball Super Ball

var Ball = function (ballType) {
  this.ballType = ballType || "regular";
};

console.log(new Ball("super").ballType);
console.log(new Ball("").ballType);
