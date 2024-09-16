// https://www.codewars.com/kata/568018a64f35f0c613000054
// Finish Guess the Number Game

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives === 0) {
      throw new Error("Expect error already dead");
    }
    if (this.number !== n) {
      this.lives -= 1;
      return false;
    }
    return true;
  }
}

let guesser = new Guesser(10, 2);

console.log(guesser.guess(1));
console.log(guesser.guess(0));
console.log(guesser.guess(3));
