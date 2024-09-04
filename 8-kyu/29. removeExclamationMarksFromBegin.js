//https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript
//Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// function remove(string) {
//   string = string.replace(/!/g, "");
//   return string + "!";
// }

const remove = (s) => s.replace(/!/g, "") + "!";

console.log(remove("!Hi!"));
