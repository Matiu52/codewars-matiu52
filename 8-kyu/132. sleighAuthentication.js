// https://www.codewars.com/kata/52adc142b2651f25a8000643
// Sleigh Authentication

class Sleigh {
  authenticate(name, password) {
    return name === "Santa Claus" && password === "Ho Ho Ho!";
  }
}

// Examples
var sleigh = new Sleigh();
console.log(sleigh.authenticate("Santa Claus", "Ho Ho Ho!"));
