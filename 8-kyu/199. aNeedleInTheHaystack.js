// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
// A Needle in the Haystack

function findNeedle(haystack) {
  let index = haystack.findIndex((hay) => /needle/.test(hay));
  return `found the needle at position ${index}`;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
