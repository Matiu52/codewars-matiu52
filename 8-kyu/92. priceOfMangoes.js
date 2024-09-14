// https://www.codewars.com/kata/57a77726bb9944d000000b06
// Price of Mangoes

// function mango(quantity, price) {
//   var freeMangoes = Math.floor(quantity / 3);
//   return (quantity - freeMangoes) * price;
// }

const mango = (q, p) => (q - Math.floor(q / 3)) * p;

console.log(mango(3, 3));
console.log(mango(9, 5));
console.log(mango(19, 25));
