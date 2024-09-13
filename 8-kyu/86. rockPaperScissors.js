// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// Rock Paper Scissors!

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   } else if (
//     (p1 == "rock" && p2 == "scissors") ||
//     (p1 == "scissors" && p2 == "paper") ||
//     (p1 == "paper" && p2 == "rock")
//   ) {
//     return "Player 1 won!";
//   } else if (
//     (p2 == "rock" && p1 == "scissors") ||
//     (p2 == "scissors" && p1 == "paper") ||
//     (p2 == "paper" && p1 == "rock")
//   ) {
//     return "Player 2 won!";
//   }
// };

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  const outcomes = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };
  return outcomes[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};

console.log(rps("rock", "scissors"));
console.log(rps("rock", "rock"));
