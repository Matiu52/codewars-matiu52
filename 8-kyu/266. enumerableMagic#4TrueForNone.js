// https://www.codewars.com/kata/545993ee52756d98ca0010e1
// Enumerable Magic #4 - True for None?

// function none(arr, fun) {
//   let check = [];
//   arr.forEach((e) => {
//     check.push(fun(e));
//   });
//   return !check.includes(true);
// }

function none(a, f) {
  return !a.some(f);
}

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  })
);
console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  })
);
