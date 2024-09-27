// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
// Who is going to pay for the wall?

function whoIsPaying(name) {
  if (name.length < 3) {
    return [name];
  } else {
    return [name, name.slice(0, 2)];
  }
}

console.log(whoIsPaying("Mexico"));
console.log(whoIsPaying("Me"));
console.log(whoIsPaying(""));
console.log(whoIsPaying("I"));
