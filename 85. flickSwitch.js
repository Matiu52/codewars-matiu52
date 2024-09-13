// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb
// Flick Switch

function flickSwitch(arr) {
  let returnTrue = true;
  return arr.map((index) =>
    index == "flick" ? (returnTrue = !returnTrue) : returnTrue
  );
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
