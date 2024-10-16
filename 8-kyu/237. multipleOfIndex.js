// https://www.codewars.com/kata/5a34b80155519e1a00000009
// Multiple of Index

function multipleOfIndex(array) {
  let multiple = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      multiple.push(array[i]);
    } else if (array[i] % i === 0) {
      multiple.push(array[i]);
    }
  }
  return multiple;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([0, -6, 32, 82, 9, 25]));
