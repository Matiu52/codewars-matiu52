// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
// Removing Elements

// function removeEveryOther(arr) {
//   let remove = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     remove.push(arr[i]);
//   }
//   return remove;
// }

function removeEveryOther(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
