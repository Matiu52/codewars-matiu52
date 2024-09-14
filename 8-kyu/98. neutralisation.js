// https://www.codewars.com/kata/65128732b5aff40032a3d8f0
// Neutralisation

function neutralise(s1, s2) {
  var newS1 = s1.split("");
  var newS2 = s2.split("");
  var neutral = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      neutral.push(0);
    } else {
      neutral.push(s1[i]);
    }
  }
  return neutral.join("");
}

console.log(neutralise("--++--", "++--++"));
console.log(neutralise("++--++", "++--++"));
console.log(neutralise("++-++--++-", "-+++-++-++"));
