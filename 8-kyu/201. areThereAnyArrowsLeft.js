// https://www.codewars.com/kata/559f860f8c0d6c7784000119
// Are there any arrows left?

function anyArrows(arrows) {
  return arrows.some((arrow) => !arrow.damaged);
}

console.log(
  anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }])
);
console.log(anyArrows([{ range: 10, damaged: true }, { damaged: true }]));
