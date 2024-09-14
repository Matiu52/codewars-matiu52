// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
// Check same case

function sameCase(char1, char2) {
  if (!/[a-zA-Z]/.test(char1) || !/[a-zA-Z]/.test(char2)) {
    return -1;
  }

  if (
    (char1 === char1.toLowerCase() && char2 === char2.toLowerCase()) ||
    (char1 === char1.toUpperCase() && char2 === char2.toUpperCase())
  ) {
    return 1;
  }

  return 0;
}

console.log(sameCase("C", "B"));
