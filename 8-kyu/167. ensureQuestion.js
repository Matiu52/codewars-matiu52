// https://www.codewars.com/kata/5866fc43395d9138a7000006
// Ensure question

function ensureQuestion(s) {
  return /\?/.test(s) ? s : s + "?";
}

console.log(ensureQuestion("hi?"));
console.log(ensureQuestion("hi"));
