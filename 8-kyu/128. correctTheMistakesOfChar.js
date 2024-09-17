// https://www.codewars.com/kata/577bd026df78c19bca0002c0
// Correct the mistakes of the character recognition software

// function correct(string) {
//   return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
// }

function correct(string) {
  const replace = { 0: "O", 1: "I", 5: "S" };
  return string.replace(/[015]/g, (char) => replace[char]);
}

console.log(correct("1ND0NE51A"));
