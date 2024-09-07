// https://www.codewars.com/kata/5556282156230d0e5e000089
// DNA to RNA Conversion

// function DNAtoRNA(dna) {
//   return dna.replace(/[T]/g, "U");
// }

const DNAtoRNA = (d) => d.replace(/[T]/g, "U");

console.log(DNAtoRNA("TTT"));
