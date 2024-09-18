// https://www.codewars.com/kata/596fba44963025c878000039
// Contamination #1 -String-

function contamination(text, char) {
  return Array.from({ length: text.length }, (_, i) => char).join("");
}

console.log(contamination("abc", "z"));
