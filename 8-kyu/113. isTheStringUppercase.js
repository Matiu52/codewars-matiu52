// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
// Is the string uppercase?

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

console.log("c".isUpperCase());
console.log("C".isUpperCase());
