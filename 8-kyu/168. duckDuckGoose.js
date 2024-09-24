// https://www.codewars.com/kata/582e0e592029ea10530009ce
// Duck Duck Goose

class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, index) {
  const zeroBasedIndex = (index - 1) % players.length;
  return players[zeroBasedIndex].name;
}

console.log(duckDuckGoose(players, 1));
console.log(duckDuckGoose(players, 3));
console.log(duckDuckGoose(players, 30));
console.log(duckDuckGoose(players, 20));
