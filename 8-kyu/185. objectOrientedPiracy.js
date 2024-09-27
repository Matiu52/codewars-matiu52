// https://www.codewars.com/kata/54fe05c4762e2e3047000add
// OOP: Object Oriented Piracy

class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20;
  }
}

console.log(new Ship(0, 0).isWorthIt());
console.log(new Ship(100, 20).isWorthIt());
