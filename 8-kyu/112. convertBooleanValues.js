// https://www.codewars.com/kata/53369039d7ab3ac506000467
// Convert boolean values to strings 'Yes' or 'No'.

// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }

const boolToWord = (b) => (!b ? "No" : "Yes");

console.log(boolToWord(true));
console.log(boolToWord(false));
