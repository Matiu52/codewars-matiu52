// https://www.codewars.com/kata/53af2b8861023f1d88000832
// Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("rio"));
console.log(areYouPlayingBanjo("adam"));
