// https://www.codewars.com/kata/5731861d05d14d6f50000626
// Training JS #29: methods of arrayObject---concat() and join()

function bigToSmall(arr) {
  let newArr = arr.flat().sort((a, b) => b - a);
  let sort = "";
  newArr.forEach((e) => {
    sort += `${e}>`;
  });
  return sort.slice(0, sort.length - 1);
}

console.log(
  bigToSmall([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
