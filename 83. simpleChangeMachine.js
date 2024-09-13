// https://www.codewars.com/kata/57238766214e4b04b8000011
// Simple Change Machine

// function changeMe(moneyIn) {
//   var str = "";
//   var val = 0;
//   if (moneyIn.includes("£")) {
//     val = moneyIn.match(/\d/g).join("") * 100;
//     if (val === 2000) {
//       return moneyIn;
//     }
//   } else if (moneyIn.includes("p")) {
//     val = moneyIn.match(/\d/g).join("");
//   } else {
//     return moneyIn;
//   }
//   if (val == 20) {
//     return "10p 10p";
//   }
//   while (val > 20) {
//     str += "20p ";
//     val -= 20;
//   }
//   if (val > 0) {
//     str += val + "p";
//   }
//   return str;
// }

function changeMe(input) {
  const values = {
    "£5": 500,
    "£2": 200,
    "£1": 100,
    "50p": 50,
    "20p": 20,
  };

  const coins = ["20p", "10p"];
  let amount = values[input];

  if (!amount) {
    return input;
  }

  let result = [];
  for (let coin of coins) {
    let coinValue = parseInt(coin);
    while (amount >= coinValue) {
      result.push(coin);
      amount -= coinValue;
    }
  }

  if (result.join(" ") === input) {
    if (input === "20p") {
      return "10p 10p";
    }
  }

  return result.join(" ");
}

console.log(changeMe("£1"));
console.log(changeMe("50p"));
console.log(changeMe("Money"));
console.log(changeMe("20p"));
console.log(changeMe("40p"));
