// https://www.codewars.com/kata/57faece99610ced690000165
// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

function remove(s) {
  return s.replace(/!+$/, "");
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!!Hi!!!"));
