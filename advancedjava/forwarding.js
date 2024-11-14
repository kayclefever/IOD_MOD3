function isOdd(number) {
  return number % 2;
} // returns true if number is odd, false otherwise
function getOddNumbers() {
  // arguments is not an array, but it 'borrows' the filter function from Array by using call
  return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
}
let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.salePrice = price * 0.9; // 10% off
}
function Food(name, price) {
  Product.call(this, name, price); // inherits from Product with custom context
  this.category = "food";
}
const cheese = new Food("cheese", 5);
console.log(
  `${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`
);
const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
user.sayHi(); // called directly, works! Hi, John
setTimeout(user.sayHi, 1000); // passed as reference, fails! Hi, undefined

const user1 = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
setTimeout(function () {
  user1.sayHi();
}, 1000); // works! Hi, John
setTimeout(() => user1.sayHi(), 1000); // same as above, arrow function (more common)

const user2 = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
const boundSayHi = user2.sayHi.bind(user); // new function reference with user context explicitly bound
setTimeout(boundSayHi, 1000); // works! Hi, John

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animalPrototype); // BUT printing it via console.log is incomplete
console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
let rabbit2 = Object.create(animal, {
  // creates a new object from prototype, with custom properties
  jumps: {
    // name of custom 'own' property for rabbit object
    value: true, // property descriptor to set the property value
    enumerable: true, // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
  },
});
console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`); // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`); // own properties, then inherited ones

function Rabbit(name) {
  // constructor function, first letter capitalized by convention
  this.jumps = true;
  this.name = name;
}
Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)
let whiteRabbit = new Rabbit("White Rabbit");
console.log(whiteRabbit); // { jumps: true, name: 'White Rabbit' } - own properties
for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`); // all properties

const obj = {}; // simple empty object
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true: its prototype is Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj))); // inherited properties from Object prototype

const arr = []; // simple empty array
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true: its prototype is Array prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arr))); //inherited properties from prototype

String.prototype.show = function () {
  // creates new 'show' function on built-in String prototype
  console.log(this);
};
"BOOM!".show(); // BOOM! - we can now call .show() on any string, since they all inherit from the prototype
// polyfilling for String.prototype
if (!String.prototype.repeat) {
  // if there's no such function in the prototype already
  String.prototype.repeat = function (n) {
    // define a repeat function to repeat the string n times
    return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
  };
}
console.log("La".repeat(3)); // LaLaLa

// define our own join() function for objects
const obj1 = {
  0: "Hello",
  1: "world",
  length: 2, // needed for join to work
};
obj1.join = Array.prototype.join; // adds a join function to THIS object that uses Array.join()
Object.prototype.join = Array.prototype.join; // adds a join function to ALL objects
console.log(obj1.join(",")); // Hello,world
