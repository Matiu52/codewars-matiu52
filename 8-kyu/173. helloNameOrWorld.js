// https://www.codewars.com/kata/57e3f79c9cb119374600046b
// Hello, Name or World!

function hello(name) {
  if (name === "" || name === undefined) {
    return "Hello, World!";
  }
  let caseName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${caseName}!`;
}

console.log(hello("alicE"));
console.log(hello(""));
console.log(hello());
