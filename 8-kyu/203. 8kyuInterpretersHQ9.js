// https://www.codewars.com/kata/591588d49f4056e13f000001
// 8kyu interpreters: HQ9+

function HQ9(code) {
  switch (code) {
    case "H":
      return "Hello World!";
    case "Q":
      return "Q";
    case "9":
      let lyrics = "";
      for (let i = 99; i > 0; i--) {
        lyrics += `${i} bottle${
          i > 1 ? "s" : ""
        } of beer on the wall, ${i} bottle${i > 1 ? "s" : ""} of beer.\n`;
        lyrics += `Take one down and pass it around, ${
          i - 1 > 0 ? i - 1 : "no more"
        } bottle${i - 1 !== 1 ? "s" : ""} of beer on the wall.\n`;
      }
      lyrics +=
        "No more bottles of beer on the wall, no more bottles of beer.\n";
      lyrics +=
        "Go to the store and buy some more, 99 bottles of beer on the wall.";
      return lyrics;
    default:
      break;
  }
}

//instead got: 2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottles of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'

//Expected: 2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'

console.log(HQ9("H"));
console.log(HQ9("Q"));
console.log(HQ9("9"));
