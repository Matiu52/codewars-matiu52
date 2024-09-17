// https://www.codewars.com/kata/514a3996d22ce03198000003
// Mr. Freeze

const MrFreeze = {
  speak: () => "hi",
  isFrozen: () => true,
};

Object.freeze(MrFreeze);

console.log(MrFreeze.speak());
console.log(MrFreeze.isFrozen(MrFreeze));
