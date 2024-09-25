// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b
// Thinkful - Number Drills: Blue and red marbles

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (
    (blueStart - bluePulled) / (blueStart - bluePulled + (redStart - redPulled))
  );
}

console.log(guessBlue(5, 5, 2, 3));
console.log(guessBlue(5, 7, 4, 3));
console.log(guessBlue(12, 18, 4, 6));
