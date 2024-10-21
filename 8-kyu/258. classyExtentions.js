// https://www.codewars.com/kata/55a14aa4817efe41c20000bc
// Classy Extentions

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

console.log(new Cat("Test").speak());
