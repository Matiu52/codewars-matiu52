// https://www.codewars.com/kata/575fa9afee048b293e000287
// How much water do I need?

function howMuchWater(water, load, clothes) {
  if (load * 2 < clothes) {
    return "Too much clothes";
  } else if (load > clothes) {
    return "Not enough clothes";
  }
  return Number((water * Math.pow(1.1, clothes - load)).toFixed(2));
}

console.log(howMuchWater(10, 11, 20));
console.log(howMuchWater(10, 10, 21));
console.log(howMuchWater(10, 10, 2));
