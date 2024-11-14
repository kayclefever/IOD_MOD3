class Person {
  static latin = "persona"; // static (class) property, belongs to class not any instance
  constructor(name) {
    this.name = name; // standard property, is unique to each instance of the class
  }
  getName() {
    // standard method, belongs to each instance of the class
    return this.name;
  }
  static createAnonymous() {
    // static (class) method, belongs to class not any instance
    return new Person("Unnamed Person");
  }
}
let jonas = new Person("Jonas");
console.log(jonas.getName()); // Jonas - name and getName() belong to an instance of Person
console.log(jonas.latin); // undefined - latin property doesn't belong to jonas
console.log(Person.latin); // persona - latin property belongs to Person class
let anon = Person.createAnonymous(); // use static (factory) method to create generic Person instance

class Laptop {
  _hardDiskType = "HDD"; // protected property, meant to be internal
  constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
}
const macbook = new Laptop("Macbook Pro");
console.log(macbook.brand); // public property, accessed externally from any instance
console.log(macbook._hardDiskType); // works, not recommended as it violates encapsulation principles
console.log(macbook.getHDiskType()); // recommended way to access protected property
