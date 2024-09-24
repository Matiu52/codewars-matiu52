// https://www.codewars.com/kata/5a360620f28b82a711000047
// Define a card suit

// function defineSuit(card) {
//   if (/♠/.test(card)) {
//     return "spades";
//   } else if (/♦/.test(card)) {
//     return "diamonds";
//   } else if (/♥/.test(card)) {
//     return "hearts";
//   } else if (/♣/.test(card)) {
//     return "clubs";
//   }
// }

function defineSuit(card) {
  const suits = {
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
    "♣": "clubs",
  };
  return suits[card[1]] || null;
}

console.log(defineSuit("9♣"));
