// https://www.codewars.com/kata/574b3b1599d8f897470018f6
// What's the real floor?

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

console.log(getRealFloor(-3));
console.log(getRealFloor(3));
console.log(getRealFloor(15));
