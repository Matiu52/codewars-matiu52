// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b
// Calculate Price Excluding VAT

//return price without vat
function excludingVatPrice(price) {
  return price !== null ? parseFloat((price / (1 + 15 / 100)).toFixed(2)) : -1;
}

console.log(excludingVatPrice(230));
console.log(excludingVatPrice(0));
