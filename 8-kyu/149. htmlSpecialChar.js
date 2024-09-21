// https://www.codewars.com/kata/56bcaedfcf6b7f2125001118
// Safen User Input Part I - htmlspecialchars

// function htmlspecialchars(formData) {
//   return formData
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;");
// }

function htmlspecialchars(formData) {
  return formData
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

console.log(htmlspecialchars("<h1>Hello World</h1>"));
