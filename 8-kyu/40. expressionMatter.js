//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
// Expressions Matter

// function expressionMatter(a, b, c) {
//   const sum = [];
//   sum.push(a + b + c);
//   sum.push(a + b * c);
//   sum.push(a * b * c);
//   sum.push(a * b + c);
//   sum.push((a + b) * c);
//   sum.push(a * (b + c));
//   return Math.max(...sum);
// }

const expressionMatter = (a, b, c) =>
  Math.max(
    a + b + c,
    a + b * c,
    a * b * c,
    a * b + c,
    (a + b) * c,
    a * (b + c)
  );

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 2, 2));
console.log(expressionMatter(9, 1, 1));
