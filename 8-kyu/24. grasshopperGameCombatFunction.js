//https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript
//Grasshopper - Terminal game combat function

// function combat(health, damage) {
//   return health - damage > 0 ? health - damage : 0;
// }
const combat = (h, d) => (h - d > 0 ? h - d : 0);
console.log(combat(100, 5));
console.log(combat(20, 30));
