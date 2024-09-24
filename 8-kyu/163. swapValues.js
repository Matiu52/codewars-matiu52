// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
// Swap Values

function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
  return args[1];
}

console.log(swapValues([1, 2]));
