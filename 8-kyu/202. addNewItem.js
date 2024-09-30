// https://www.codewars.com/kata/566dc05f855b36a031000048
// https://www.codewars.com/kata/566dc05f855b36a031000048

// function addExtra(listOfNumbers) {
//   if (listOfNumbers.length == 0) {
//     listOfNumbers.push(1);
//   } else {
//     listOfNumbers.push(listOfNumbers[listOfNumbers.length - 1] + 1);
//   }
//   return listOfNumbers;
// }

function addExtra(listOfNumbers) {
  listOfNumbers.push(
    listOfNumbers.length ? listOfNumbers[listOfNumbers.length - 1] + 1 : 1
  );
  return listOfNumbers.map((n) => n);
}

console.log(addExtra([1, 2, 3]));
console.log(addExtra([]));
