// https://www.codewars.com/kata/5865918c6b569962950002a1
// All Star Code Challenge #18

function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === letter ? (count += 1) : 0;
  }
  return count;
}

console.log(strCount("Hello", "l"));
