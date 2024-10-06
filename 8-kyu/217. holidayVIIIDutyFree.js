// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
// Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol) {
  let bottle = hol / ((normPrice * discount) / 100);
  return Math.floor(bottle);
}

console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));
