// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// function replace(s) {
//   return s.replace(/[auieo]/gi, "!");
// }

const replace = (s) => s.replace(/[aeuio]/gi, "!");

console.log(replace("ABCDE"));
