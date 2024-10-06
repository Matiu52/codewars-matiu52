// https://www.codewars.com/kata/570597e258b58f6edc00230d
// Remove First and Last Character Part Two

function array(string) {
  let str = string.split(",").slice(1, -1).join(" ");
  return str != "" ? str : null;
}

console.log(array("1,2,3,4,5"));
console.log(array(""));
console.log(array("1"));
