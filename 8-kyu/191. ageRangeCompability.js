// https://www.codewars.com/kata/5803956ddb07c5c74200144e
// Age Range Compatibility Equation

function datingRange(age) {
  if (age < 15) {
    let min = Math.floor(age - 0.1 * age);
    let max = Math.floor(age + 0.1 * age);
    return `${min}-${max}`;
  } else {
    let min = Math.floor(age / 2 + 7);
    let max = Math.floor((age - 7) * 2);
    return `${min}-${max}`;
  }
}

console.log(datingRange(17));
console.log(datingRange(10));
