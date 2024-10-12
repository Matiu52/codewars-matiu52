// https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a
// Total pressure calculation

solution = (
  molarMass1,
  molarMass2,
  givenMass1,
  givenMass2,
  volume,
  temp,
  r = 0.082
) => {
  return (
    ((givenMass1 / molarMass1 + givenMass2 / molarMass2) *
      r *
      (temp + 273.15)) /
    volume
  );
};

console.log(solution(44, 30, 3, 2, 5, 50));
