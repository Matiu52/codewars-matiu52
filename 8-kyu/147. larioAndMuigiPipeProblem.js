// https://www.codewars.com/kata/56b29582461215098d00000f
// Lario and Muigi Pipe Problem

// function pipeFix(numbers) {
//   var newNum = [];
//   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
//     newNum.push(i);
//   }
//   return newNum;
// }

function pipeFix(numbers) {
  return Array.from(
    { length: numbers[numbers.length - 1] - numbers[0] + 1 },
    (_, i) => numbers[0] + i
  );
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
