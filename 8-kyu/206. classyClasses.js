// https://www.codewars.com/kata/55a144eff5124e546400005a
// Classy Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

console.log(new Person("john", "34"));
