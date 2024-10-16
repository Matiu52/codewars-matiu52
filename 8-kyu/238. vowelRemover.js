// https://www.codewars.com/kata/5547929140907378f9000039
// Vowel remover

function shortcut(string) {
  return string.replace(/[auieo]/g, "");
}

console.log(shortcut("hello"));
