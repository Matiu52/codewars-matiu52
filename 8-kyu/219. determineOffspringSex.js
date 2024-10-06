// https://www.codewars.com/kata/56530b444e831334c0000020
// Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
  switch (sperm[1]) {
    case "Y":
      return "Congratulations! You're going to have a son.";
    case "X":
      return "Congratulations! You're going to have a daughter.";
    default:
      break;
  }
}

console.log(chromosomeCheck("XY"));
console.log(chromosomeCheck("XX"));
