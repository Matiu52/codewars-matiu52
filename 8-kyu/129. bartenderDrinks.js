// https://www.codewars.com/kata/568dc014440f03b13900001d
// L1: Bartender, drinks!

function getDrinkByProfession(param) {
  const map = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
    else: "Beer",
  };
  return map[param.toLowerCase()] ? map[param.toLowerCase()] : map["else"];
}

console.log(getDrinkByProfession("jabroni"));
console.log(getDrinkByProfession("jabrOni"));
console.log(getDrinkByProfession("School Counselor"));
console.log(getDrinkByProfession("Pug"));
