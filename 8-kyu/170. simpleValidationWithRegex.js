// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
// Simple validation of a username with regex

function validateUsr(username) {
  const usernameRegex = /^[a-z0-9_]{4,16}$/;
  return usernameRegex.test(username);
}

console.log(validateUsr("matius"));
console.log(validateUsr("matius123"));
console.log(validateUsr("matius123_"));
console.log(validateUsr("Matius123_"));
console.log(validateUsr("1234567890abcdefh"));
console.log(validateUsr("123"));
console.log(validateUsr("enig0"));
console.log(validateUsr("Hass"));
console.log(validateUsr("Has was"));
console.log(validateUsr("____"));
console.log(validateUsr("awdadaAwda"));
