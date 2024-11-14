class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}
class Rabbit extends Animal {
  hide() {
    // custom function, also inherits from Animal
    console.log(`${this.name} hides!`);
  }
}
let bunny = new Rabbit("bunny"); // bunny contains properties and methods from Animal and Rabbit
bunny.run(9); // bunny runs with speed 9 kph.
bunny.hide(); // bunny hides!

class Rabbit extends Animal {
  stop() {
    // overrides stop method in parent class
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
  hide() {
    // custom function, also inherits this.name from Animal
    console.log(`${this.name} hides!`);
  }
}
let bunny = new Rabbit("bunny"); // bunny contains properties and methods from Animal and Rabbit
bunny.run(9); // bunny runs with speed 9 kph.
bunny.stop(); // bunny stands still. bunny hides!

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name); // call the constructor function of the parent, inherited Animal class
    this.earLength = earLength; // adds custom properties only for instances of Rabbit
  }
  stop() {
    // function overridden from parent class
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
  hide() {
    // custom child class function
    console.log(`${this.name} hides!`);
  }
}
let bunny = new Rabbit("bunny", 8); // bunny contains properties and methods from Animal and Rabbit
console.log(bunny.earLength); // 8

class Animal {
  type = "animal";
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  describe() {
    console.log(`${this.name} is a ${this.type}`);
  }
  //... previous Animal methods go here
}
class Rabbit extends Animal {
  type = "rabbit";
  //... previous Rabbit methods go here
}
new Rabbit("bunny").describe(); // bunny is a rabbit
new Animal("fuzzy wuzzy").describe(); // fuzzy wuzzy is a animal
