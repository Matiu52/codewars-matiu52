// https://www.codewars.com/kata/57cff961eca260b71900008f
// Is there a vowel in there?

function isVow(a) {
  let newArr = a.map((v) =>
    v === 97
      ? "a"
      : v === 117
      ? "u"
      : v === 105
      ? "i"
      : v === 101
      ? "e"
      : v === 111
      ? "o"
      : v
  );
  return newArr;
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
