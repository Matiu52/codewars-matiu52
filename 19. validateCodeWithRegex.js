//https://www.codewars.com/kata/56a25ba95df27b7743000016
//validate code with simple regex

// function validateCode(code) {
//   code = code.toString();
//   firstNum = code.match(/\d/)[0];
//   return firstNum == "3" || firstNum == "2" || firstNum == "1";
// }
const validateCode = (c) => /^[123]/.test(c.toString());
console.log(validateCode(321));
console.log(validateCode(421));
