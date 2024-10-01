// https://www.codewars.com/kata/56019d3b2c39ccde76000086
// Grasshopper - Terminal Game Turn Function

function doTurn() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

// Example usage:
console.log(doTurn);
