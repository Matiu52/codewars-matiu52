// https://www.codewars.com/kata/57096af70dad013aa200007b
// Logical calculator

function logicalCalc(booleans, operator) {
  if (booleans.length === 0) return false;

  return booleans.reduce((acc, current) => {
    switch (operator) {
      case "AND":
        return acc && current;
      case "OR":
        return acc || current;
      case "XOR":
        return acc ^ (current > 0) ? true : false;
      default:
        throw new Error("Invalid operator");
    }
  });
}

console.log(logicalCalc([true, true, false], "AND"));
console.log(logicalCalc([false, true, false], "AND"));
console.log(logicalCalc([true, true, false], "OR"));
console.log(logicalCalc([true, true, false], "XOR"));
console.log(logicalCalc([true], "AND"));
console.log(logicalCalc([false, false], "AND"));
console.log(logicalCalc([false, false], "OR"));
console.log(logicalCalc([false, false], "XOR"));
console.log(logicalCalc([true, true], "XOR"));
