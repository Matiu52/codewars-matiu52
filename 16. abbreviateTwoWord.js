//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
//Abbreviate a Two Word Name
function abbrevName(name) {
  let splitN = name.split(" ");
  return (splitN[0][0] + "." + splitN[1][0]).toUpperCase();
}
console.log(abbrevName("Sam Harris"));
