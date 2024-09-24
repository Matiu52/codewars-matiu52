// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058
// Do you speak "English"?

function spEng(sentence) {
  return /english/.test(sentence.toLowerCase());
}

console.log(spEng("abcEnglishdef"));
