// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
// Parse nice int from char problem

// function getAge(inputString) {
//   return Number(inputString.match(/\d/g).join(""));
// }

// const getAge = (s) => Number(s.match(/\d/g).join(""));

const getAge = (s) => parseInt(s);

console.log(getAge("54 years old"));
