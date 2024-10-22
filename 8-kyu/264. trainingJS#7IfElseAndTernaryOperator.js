// https://www.codewars.com/kata/57202aefe8d6c514300001fd
// Training JS #7: if..else and ternary operator

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
}

console.log(saleHotdogs(100));
console.log(saleHotdogs(5));
