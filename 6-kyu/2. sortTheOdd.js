function sortArray(array) {
  array = array.slice();
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  return array.map((num) => (num % 2 !== 0 ? oddNumbers.shift() : num));
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // test call for Quokka
console.log(sortArray([5, 3, 1, 8, 0])); // test call for Quokka
