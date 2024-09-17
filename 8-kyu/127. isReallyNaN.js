// https://www.codewars.com/kata/56c24c58e0c0f741d4001aef
// isReallyNaN

const isReallyNaN = (val) => {
  return Number.isNaN(val);
};

console.log(isReallyNaN(37));
console.log(isReallyNaN(NaN));
console.log(isReallyNaN(undefined));
console.log(isReallyNaN(false));
console.log(isReallyNaN(true));
