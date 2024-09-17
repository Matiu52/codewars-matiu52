// https://www.codewars.com/kata/56f6919a6b88de18ff000b36
// 101 Dalmatians - squash the bugs, not the dogs!

// function howManyDalmations(numer :

//     var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

//     var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]

//   return respond

function howManyDalmatians(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];
  return number <= 10
    ? dogs[0]
    : number <= 50
    ? dogs[1]
    : number == 101
    ? dogs[3]
    : dogs[2];
}

console.log(howManyDalmatians(26));
console.log(howManyDalmatians(1));
console.log(howManyDalmatians(100));
console.log(howManyDalmatians(101));
