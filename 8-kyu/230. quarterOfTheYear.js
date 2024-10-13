// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
// Quarter of the year

const quarterOf = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : month < 13 ? 4 : 0;
};

console.log(quarterOf(8));
console.log(quarterOf(11));
console.log(quarterOf(3));
