// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// Beginner - Lost Without a Map

// function maps(x){
//     let newX = [];
//     x.forEach(a => {
//         newX.push(a*2)
//     });
//     return newX;
// }

// function maps(x){
//     return x.map(num => num * 2);;
// }

maps = x => x.map(e => e * 2);

console.log(maps([4, 1, 1, 1, 4]));