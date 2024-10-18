// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
// Century From Year

function century(year) {
  return year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
}

console.log(century(1900));
console.log(century(89));
