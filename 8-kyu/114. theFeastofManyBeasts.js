// https://www.codewars.com/kata/5aa736a455f906981800360d
// The Feast of Many Beasts

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

console.log(feast("great blue heron", "garlic naan"));
