// https://www.codewars.com/kata/57126304cdbf63c6770012bd
// Is it a number?

function isDigit(s) {
  return s.trim().length === 0 ? false : !isNaN(s);
}

console.log(isDigit(""));
console.log(isDigit(" "));
console.log(isDigit("232"));
console.log(isDigit("2 3 2"));
console.log(isDigit("zero"));
console.log(isDigit("3-4"));
console.log(isDigit("-234.4"));
console.log(isDigit("s234.4"));
