// https://www.codewars.com/kata/559ac78160f0be07c200005a
// Name Shuffler

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("john McClane"));
