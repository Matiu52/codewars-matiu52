// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
// Sort and Star

function twoSort(s) {
  let sort = s.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })[0];
  return sort.split("").reduce((a, v) => a + "***" + v);
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
console.log(
  twoSort([
    "BTC",
    "BTC",
    "Bitcoin",
    "Classic",
    "Classic",
    "Classic",
    "DarkCoin",
    "DarkCoin",
    "Dash",
    "Ethereum",
    "Lisk",
    "LiteCoin",
    "Mine",
    "ProofOfStake",
    "Ripple",
  ])
);
