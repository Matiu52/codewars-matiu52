// https://www.codewars.com/kata/54147087d5c2ebe4f1000805
// The 'if' function

// function _if(bool, func1, func2) {
//   if (!bool) {
//     return func2();
//   }
//   return func1();
// }

const _if = (b, f1, f2) => (!b ? f2() : f1());

console.log(_if(true, () => (testvar = 42), ""));
