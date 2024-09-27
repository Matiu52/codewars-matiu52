// https://www.codewars.com/kata/559d2284b5bb6799e9000047
// Add Length

function addLength(str) {
  let join = [];
  let split = str.split(" ");
  split.forEach((e) => {
    join.push(`${e} ${e.length}`);
  });
  return join;
}

console.log(addLength("apple ban"));
