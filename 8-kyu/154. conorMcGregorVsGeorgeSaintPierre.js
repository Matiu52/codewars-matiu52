// https://www.codewars.com/kata/582dafb611d576b745000b74
// For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

var quote = function (fighter) {
  return fighter.toLowerCase() === "conor mcgregor"
    ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    : "I am not impressed by your performance.";
};

console.log(quote("George Saint Pierre"));
console.log(quote("Conor McGregor"));
