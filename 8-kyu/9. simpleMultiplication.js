// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
// Simple multiplication

// function simpleMultiplication(number) {
//     // *8 jika genap
//     // *9 jika ganjil
//     if(number%2 == 0){
//        return number * 8;
//     }
//     return number * 9;
// }

simpleMultiplication = (n) => {
  return n % 2 == 0 ? n * 8 : n * 9;
};

console.log(simpleMultiplication(4));
