//https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript
//Return the day
// function whatday(num) {
//   var arrDay = {
//     1: "Sunday",
//     2: "Monday",
//     3: "Tuesday",
//     4: "Wednesday",
//     5: "Thursday",
//     6: "Friday",
//     7: "Saturday",
//   };
//   if (num > 7 || num < 1) {
//     return "Wrong, please enter a number between 1 and 7";
//   }
//   return arrDay[num];
// }
const whatday = (num) =>
  num == 1
    ? "Sunday"
    : num == 2
    ? "Monday"
    : num == 3
    ? "Tuesday"
    : num == 4
    ? "Wednesday"
    : num == 5
    ? "Thursday"
    : num == 6
    ? "Friday"
    : num == 7
    ? "Saturday"
    : "Wrong, please enter a number between 1 and 7";
console.log(whatday(1));
