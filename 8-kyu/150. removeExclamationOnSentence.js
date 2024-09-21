// https://www.codewars.com/kata/57faf7275c991027af000679
// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

function remove(s, n) {
  var countExc = s.match(/!/g) != null ? s.match(/!/g).length : 0;
  var string = s;
  if (countExc >= n) {
    for (let i = 0; i < n; i++) {
      string = string.replace("!", "");
    }
  } else {
    string = s.replaceAll("!", "");
  }
  return string;
}

// function remove(s, n) {
//   return s.replace(/!/g, (match, offset, string) => (n-- > 0 ? "" : match));
// }

console.log(remove("Hi!!!", 1));
console.log(remove("Hi", 1));
console.log(remove("!!!Hi !!hi!!! !hi", 100));
console.log(remove("!!!Hi !!hi!!! !hi", 3));
