//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
//I love you, a little , a lot, passionately ... not at all

// function howMuchILoveYou(nbPetals) {
//   nbPetals = nbPetals % 6;
//   if (nbPetals == 1) {
//     return "I love you";
//   } else if (nbPetals == 2) {
//     return "a little";
//   } else if (nbPetals == 3) {
//     return "a lot";
//   } else if (nbPetals == 4) {
//     return "passionately";
//   } else if (nbPetals == 5) {
//     return "madly";
//   } else if (nbPetals == 6 || nbPetals == 0) {
//     return "not at all";
//   }
// }
const howMuchILoveYou = (petals) => {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return phrases[(petals - 1) % phrases.length];
};
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));
