// https://www.codewars.com/kata/572b6b2772a38bc1e700007a
// ASCII Total

function uniTotal(string) {
  return string.split("").reduce((a, v) => a + v.charCodeAt(), 0);
}

console.log(uniTotal("a"));
console.log(uniTotal("aaa"));
