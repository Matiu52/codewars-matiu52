// https://www.codewars.com/kata/5bb904724c47249b10000131
// Total amount of points

function points(games) {
  return games
    .map((i) => (i[0] > i[2] ? 3 : i[0] == i[2] ? 1 : 0))
    .reduce((a, v) => a + v, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
