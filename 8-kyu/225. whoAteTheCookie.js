// https://www.codewars.com/kata/55a996e0e8520afab9000055
// Who ate the cookie?

function cookie(x) {
  let str = "Who ate the last cookie? It was ";
  if (typeof x === "string") {
    return str + "Zach!";
  } else if (typeof x === "number") {
    return str + "Monica!";
  } else {
    return str + "the dog!";
  }
}

console.log(cookie(26));
console.log(cookie(2.6));
console.log(cookie("ryan"));
console.log(cookie(true));
