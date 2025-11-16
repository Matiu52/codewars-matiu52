function high(x) {
  const words = x.split(" ");
  let highestScore = 0;
  let highestWord = "";

  for (const word of words) {
    const score = [...word].reduce(
      (sum, char) => sum + (char.charCodeAt(0) - 96),
      0
    );
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }
  return highestWord;
}

console.log(high("man i need a taxi up to ubud")); // "taxi"
