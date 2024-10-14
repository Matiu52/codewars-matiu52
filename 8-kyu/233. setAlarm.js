// https://www.codewars.com/kata/568dcc3c7f12767a62000038
// L1: Set Alarm

function setAlarm(employed, vacation) {
  if (employed < vacation) {
    return false;
  }
  return (employed ^ vacation) === 0 ? false : true;
}

console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, false));
console.log(setAlarm(false, true));
