// https://www.codewars.com/kata/58649884a1659ed6cb000072
// Thinkful - Logic Drills: Traffic light

// function updateLight(current) {
//   return current === "green"
//     ? "yellow"
//     : current === "yellow"
//     ? "red"
//     : current == "red"
//     ? "green"
//     : "";
// }

function updateLight(c) {
  switch (c) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
  }
}
console.log(updateLight("green"));
console.log(updateLight("yellow"));
