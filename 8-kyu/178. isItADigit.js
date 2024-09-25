// https://www.codewars.com/kata/567bf4f7ee34510f69000032
// Regexp Basics - is it a digit?

String.prototype.digit = function () {
  let regex = /^[0-9]$/;
  return regex.test(this);
};

console.log("1".digit());
console.log("17".digit());
console.log("1ad".digit());
console.log("ad23131".digit());
console.log(" ".digit());
