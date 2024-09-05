// https://www.codewars.com/kata/55e8aba23d399a59500000ce
// Grasshopper - Terminal Game #1

function Hero(name = "Hero") {
  this.name = name;
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

console.log(new Hero("Greg"));
