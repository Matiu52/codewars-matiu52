// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
// Crash Override

var firstName = { A: "Alpha", B: "Beta", C: "Cache" };
var surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };

function aliasGen(a, b) {
  if (
    a > 0 ||
    b > 0 ||
    firstName[a[0].toUpperCase()] == undefined ||
    surname[b[0].toUpperCase()] == undefined
  ) {
    return "Your name must start with a letter from A - Z.";
  }
  return firstName[a[0].toUpperCase()] + (" " + surname[b[0].toUpperCase()]);
}

console.log(aliasGen("Agung", "Ceri"));
console.log(aliasGen("1", "Ceri"));
