// https://www.codewars.com/kata/57f222ce69e09c3630000212
// Well of Ideas - Easy Version

// function well(x) {
//   var sumGood = x.reduce(
//     (acc, val) => (val == "good" ? (acc += 1) : (acc += 0)),
//     0
//   );
//   return sumGood > 2 ? "I smell a series!" : sumGood > 0 ? "Publish!" : "Fail!";
// }

function well(x) {
  const sumGood = x.reduce((acc, val) => acc + (val === "good" ? 1 : 0), 0);
  return sumGood > 2 ? "I smell a series!" : sumGood > 0 ? "Publish!" : "Fail!";
}

console.log(well(["bad", "bad", "bad"]));
