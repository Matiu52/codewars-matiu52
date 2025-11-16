function deleteNth(arr, n) {
  let counts = {};
  return arr.filter(function (item) {
    counts[item] = (counts[item] || 0) + 1;
    return counts[item] <= n;
  });
}

console.log(deleteNth([1, 1, 1, 1], 2)); // [1,1]
