// https://www.codewars.com/kata/55ccdf1512938ce3ac000056
// A Strange Trip to the Market

function isLockNessMonster(s) {
  return s.match(/tree fiddy/g) !== null || s.match(/3.50/g) !== null;
}

console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  )
);
console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to 3.50"
  )
);
