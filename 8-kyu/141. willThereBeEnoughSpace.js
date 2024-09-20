// https://www.codewars.com/kata/5875b200d520904a04000003
// Will there be enough space?

function enough(cap, on, wait) {
  return on + wait - cap > 0 ? on + wait - cap : 0;
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
