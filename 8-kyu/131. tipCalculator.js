// https://www.codewars.com/kata/56598d8076ee7a0759000087
// Tip Calculator

function calculateTip(amount, rating) {
  var lowCaseRating = rating.toLowerCase();
  var ratings = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  };
  return ratings[lowCaseRating] === undefined
    ? "Rating not recognised"
    : Math.ceil(ratings[lowCaseRating] * amount);
}

console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(20, "terrible"));
console.log(calculateTip(20, "ta"));
