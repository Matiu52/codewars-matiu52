//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript
//Days in the year

// function yearDays(year) {
//   if (year % 4 == 0) {
//     return year + " has 366 days";
//   }
//   return year + " has 365 days";
// }
const yearDays = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? year + " has 366 days"
    : year + " has 365 days";
console.log(yearDays(2000));
console.log(yearDays(2001));
console.log(yearDays(-64));
