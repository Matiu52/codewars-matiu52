// https://www.codewars.com/kata/5a07e5b7ffe75fd049000051
// Sort My Textbooks

function sorter(textbooks) {
  let sortedTextbooks = textbooks.sort((a, b) => {
    let normalizedA = a.toLowerCase();
    let normalizedB = b.toLowerCase();

    if (normalizedA < normalizedB) return -1;
    if (normalizedA > normalizedB) return 1;
    return 0;
  });
  return sortedTextbooks;
}

console.log(sorter(["Algebra", "History", "Geometry", "English"]));
console.log(sorter(["Algebra", "history", "Geometry", "english"]));
console.log(sorter(["Alg#bra", "$istory", "Geom^try", "**english"]));
