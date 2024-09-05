//https://www.codewars.com/kata/5b609ebc8f47bd595e000627/train/javascript
//Find the force of gravity between two objects
function convertMass(value, unit) {
  switch (unit) {
    case "kg":
      return value;
    case "g":
      return value / 1000;
    case "mg":
      return value / 1e6;
    case "μg":
      return value / 1e9;
    case "lb":
      return value * 0.453592;
    default:
      throw new Error("Unknown mass unit");
  }
}

function convertDistance(value, unit) {
  switch (unit) {
    case "m":
      return value;
    case "cm":
      return value / 100;
    case "mm":
      return value / 1000;
    case "μm":
      return value / 1e6;
    case "ft":
      return value * 0.3048;
    default:
      throw new Error("Unknown distance unit");
  }
}
solution = (arr_val, arr_unit) => {
  const G = 6.67e-11;
  const mass1 = convertMass(arr_val[0], arr_unit[0]);
  const mass2 = convertMass(arr_val[1], arr_unit[1]);
  const distance = convertDistance(arr_val[2], arr_unit[2]);
  const force = (G * (mass1 * mass2)) / Math.pow(distance, 2);
  return force;
};

console.log(solution([1000, 1000, 100], ["kg", "kg", "cm"]));
console.log(solution([1000, 1000, 100], ["g", "kg", "m"]));
