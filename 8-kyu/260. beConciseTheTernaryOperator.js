// https://www.codewars.com/kata/56f3f6a82010832b02000f38
// Be Concise I - The Ternary Operator

function describeAge(age) {
  return (
    "You're a(n) " +
    (age <= 12
      ? "kid"
      : age <= 17
      ? "teenager"
      : age <= 64
      ? "adult"
      : "elderly")
  );
}

console.log(describeAge(9));
