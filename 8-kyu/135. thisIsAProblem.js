// https://www.codewars.com/kata/547c71fdc5b2b38db1000098
// "this" is a problem

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return (this.name = `${first} ${last}`);
}

console.log(NameMe("John", "DOe"));
