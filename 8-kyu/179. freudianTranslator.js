// https://www.codewars.com/kata/5713bc89c82eff33c60009f7
// Freudian translator

function toFreud(string) {
  return string === ""
    ? ""
    : Array.from({ length: string.split(" ").length }, (_, i) => "sex").join(
        " "
      );
}

console.log(toFreud("a d d w"));
console.log(toFreud(""));
