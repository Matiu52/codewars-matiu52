// https://www.codewars.com/kata/5977618080ef220766000022
// USD => CNY

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

console.log(usdcny(15));
