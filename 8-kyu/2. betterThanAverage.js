// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
// How good are you really?
// function betterThanAverage(classPoints, yourPoints) {
//     let sum = 0;
//     classPoints.forEach(classPoint => {
//         sum += classPoint;
//     });
//     const average = sum / classPoints.length;
//     const better = (yourPoints > average) ? true : false;
//     return better;
//   }

let betterThanAverage = (arr, a) => {return (a > (arr.reduce((acc, val) => acc + val, 0) /arr.length) ? true : false);}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 0));