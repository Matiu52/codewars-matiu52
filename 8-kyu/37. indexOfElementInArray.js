//https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
//Be Concise IV - Index of an element in an array
// function find(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) return i;
//   }
//   return "Not found";
// }

// function find(array, element) {
//   const index = array.findIndex((item) => item === element);
//   return index > -1 ? index : "Not found";
// }

// const find = (a, e) => (j = a.findIndex((i) => i === e) > -1 ? j : "Not found");

// const find = (a, e) =>
//   a.reduce((r, v, i) => (r != "Not found" ? r : v == e ? i : r), "Not found");

// const find = (a, e) => (a.indexOf(e) > -1 ? a.indexOf(e) : "Not found");
const find = (a, e) => {
  var j = a.indexOf(e);
  return j > -1 ? j : "Not found";
};

console.log(
  find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "true")
);
