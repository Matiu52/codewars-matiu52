// https://www.codewars.com/kata/57078c56924f34f763000b3f
// Circular Objects #1 - Running around in circles

const circular = {
  value: "Hello World",
};
circular.self = circular;

console.log(circular.value);
console.log(circular === circular.self);
