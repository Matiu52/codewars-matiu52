// https://www.codewars.com/kata/56a4addbfd4a55694100001f
// Did she say hallo?

function validateHello(greetings) {
  let reg = /hello|ciao|salut|hallo|hola|ahoj|czesc/;
  res = reg.test(greetings.toLowerCase());
  return res;
}

console.log(validateHello("hello"));
console.log(validateHello("halo"));
console.log(validateHello("czesc"));
console.log(validateHello("hallowen"));
