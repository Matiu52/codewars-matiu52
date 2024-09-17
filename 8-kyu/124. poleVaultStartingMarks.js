// https://www.codewars.com/kata/5786f8404c4709148f0006bf
// Pole Vault Starting Marks

function startingMark(bodyHeight) {
  const gradient = (10.67 - 9.45) / (1.83 - 1.52);
  const offset = 9.45 - gradient * 1.52;
  const bestMark = gradient * bodyHeight + offset;
  return Number(bestMark.toFixed(2));
}

console.log(startingMark(1.52));
