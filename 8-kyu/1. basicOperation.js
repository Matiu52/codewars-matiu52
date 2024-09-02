// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
// Basic Mathematical Operations

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//     default:
//       return 0;
//   }
// }
const basicOp = (op, val1, val2) => eval(`val1 ${op} val2`);

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
