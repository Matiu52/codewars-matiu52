// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
// Switch It Up!

function switchItUp(number) {
  let mapNum = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };
  return mapNum[number];
}

console.log(switchItUp(1));
console.log(switchItUp(0));
