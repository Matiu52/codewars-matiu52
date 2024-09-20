// https://www.codewars.com/kata/5302d846be2a9189af0001e4
// Welcome to the City

function sayHello(name, city, state) {
  let fullname = name.join(" ");
  return `Hello, ${fullname}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));
console.log(
  sayHello(["Franklin", "Delano", "Roosevelt"], "Chicago", "Illinois")
);
