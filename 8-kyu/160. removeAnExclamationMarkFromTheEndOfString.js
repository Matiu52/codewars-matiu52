// https://www.codewars.com/kata/57fae964d80daa229d000126
// Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove(s) {
  return s.replace(/!$/, "");
}

console.log(remove("Hi! Hi!!!"));
