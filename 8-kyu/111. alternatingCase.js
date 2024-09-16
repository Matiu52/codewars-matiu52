// https://www.codewars.com/kata/56efc695740d30f963000557
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// String.prototype.toAlternatingCase = function () {
//   var string = "";
//   var name = this.split("");
//   for (let i = 0; i < this.length; i++) {
//     if (name[i] === " ") {
//       string += " ";
//     } else if (name[i] === name[i].toUpperCase()) {
//       string += name[i].toLowerCase();
//     } else if (name[i] === name[i].toLowerCase()) {
//       string += name[i].toUpperCase();
//     }
//   }
//   return string;
// };

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((char) => {
      if (char === " ") return " ";
      return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    })
    .join("");
};

console.log("Hello World".toAlternatingCase());
console.log("hello world".toAlternatingCase());
