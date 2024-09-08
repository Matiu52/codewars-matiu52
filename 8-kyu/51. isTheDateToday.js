// https://www.codewars.com/kata/563c13853b07a8f17c000022
// Is the date today

// function isToday(date) {
//   return date == Date();
// }

const isToday = (d) => d.toString() === Date().toString();

console.log(isToday(Date()));
console.log(isToday("tom"));
