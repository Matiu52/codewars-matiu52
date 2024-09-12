// https://www.codewars.com/kata/57eae65a4321032ce000002d
// Fake Binary

// function fakeBin(x) {
//   var fakeBinArray = [];
//   for (let i = 0; i < x.length; i++) {
//     if (Number(x[i]) < 5) {
//       fakeBinArray.push("0");
//     } else {
//       fakeBinArray.push("1");
//     }
//   }
//   return fakeBinArray.join("");
// }

const fakeBin = (x) =>
  x
    .split("")
    .map((num) => (num < 5 ? "0" : "1"))
    .join("");

console.log(fakeBin("45385593107843568"));
