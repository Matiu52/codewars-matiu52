// https://www.codewars.com/kata/547274e24481cfc469000416
// Basic subclasses - Adam and Eve

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    const adam = new Man("Adam");
    const eve = new Woman("Eve");
    return [adam, eve];
  }
}

console.log(God.create());
