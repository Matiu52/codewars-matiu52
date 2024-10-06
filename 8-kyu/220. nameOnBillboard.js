// https://www.codewars.com/kata/570e8ec4127ad143660001fd
// Name on billboard

function billboard(name, price = 30) {
  let total = "";
  for (let i = 0; i < price; i++) {
    total += name;
  }
  return total.length;
}

console.log(billboard("Jeong-Ho Aristotelis"));
