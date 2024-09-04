//https://www.codewars.com/kata/55cbd4ba903825f7970000f5
//Grasshopper - Grade book

function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  return avg < 60
    ? "F"
    : avg < 70
    ? "D"
    : avg < 80
    ? "C"
    : avg < 90
    ? "B"
    : "A";
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(70, 70, 100));
console.log(getGrade(58, 59, 60));
