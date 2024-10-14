// https://www.codewars.com/kata/5ad0d8356165e63c140014d4
// Student's Final Grade

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam === 0) {
    return 0;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
}

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
