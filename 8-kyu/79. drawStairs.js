// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
// Draw stairs

// function drawStairs(n) {
//   let stairs = "";
//   for (let i = 0; i < n; i++) {
//     if (i < n - 1) {
//       stairs += " ".repeat(i) + "I\n";
//     } else {
//       stairs += " ".repeat(i) + "I";
//     }
//   }
//   return stairs;
// }

function drawStairs(n) {
  return Array.from({ length: n }, (_, i) => " ".repeat(i) + "I").join("\n");
}

console.log(drawStairs(3));
