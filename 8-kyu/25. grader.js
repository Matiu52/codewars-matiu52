//https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript
//Grader

// function grader(score) {
//   if (score >= 0.9) {
//     return "A";
//   } else if (score >= 0.8) {
//     return "B";
//   } else if (score >= 0.7) {
//     return "C";
//   } else if (score >= 0.6) {
//     return "D";
//   }
//   return "F";
// }

const grader = (s) =>
  (s < 0.6) | (s > 1)
    ? "F"
    : s < 0.7
    ? "D"
    : s < 0.8
    ? "C"
    : s < 0.9
    ? "B"
    : "A";

console.log(grader(0.6));
console.log(grader(0.8));
console.log(grader(0.5));
console.log(grader(1.1));
console.log(grader(1));
console.log(grader(0.9));
