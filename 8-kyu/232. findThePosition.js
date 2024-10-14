// https://www.codewars.com/kata/5808e2006b65bff35500008f
// Find the position!

function position(c) {
  return `Position of alphabet: ${c.toLowerCase().charCodeAt(0) - 96}`;
}

console.log(position("z"));
