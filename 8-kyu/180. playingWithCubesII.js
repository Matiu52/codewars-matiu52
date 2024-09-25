// https://www.codewars.com/kata/55c0ac142326fdf18d0000af
// Playing with cubes II

class Cube {
  constructor(n = undefined) {
    if (n === undefined) {
      this.side = 0;
    } else {
      this.side = Math.abs(n);
    }
  }
  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

let cube = new Cube(12);
console.log(cube.getSide());
