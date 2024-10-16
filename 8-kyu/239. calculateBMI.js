// https://www.codewars.com/kata/57a429e253ba3381850000fb
// Calculate BMI

function bmi(weight, height) {
  let bmi = weight / (height * height);
  return bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}

console.log(bmi(80, 1.8));
