// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
// Beginner Series #1 School Paperwork
// function paperwork(n, m) {
//   if (n < 0 || m < 0) {
//     return 0;
//   }
//   return n * m;
// }
paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

console.log(paperwork(5, 5));
console.log(paperwork(-5, -5));
