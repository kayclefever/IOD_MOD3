// command slash adds this comment
/* code block comment
    starts with these two * / but togthere 
    */

const integer = 123; // integer = whole number
const float = 12.345; // floating point = decimal number

let one = 1;
let two = 2;
let three = 3;
// standard BODMAS order of operations - use brackets to override
// below is: 1 + 2 - ( (3 * 2) / 1 ) = 3 - 6
console.log(one + two - (three * two) / one); // -3

// to increment by one (all the same):
one = one + 1; // new value of one is previous value + 1
one += 1; // shorthand - add 1 to previous (also *=)
one++; // increment previous value (by 1)
// to decrement by one (all the same):
two = two - 1; // new value of two is previous value - 1
two -= 1; // shorthand - minus 1 from previous (also /=)
two--; // decrement previous value (by 1)

let isChecked = false;
let isToggleOn = true;

isChecked = !isChecked;
console.log(isChecked); // true


console.log(typeof undefined); // undefined
console.log(typeof 0); // number
console.log(typeof 10n); // bigint
console.log(typeof true); // boolean
console.log(typeof "text"); // string
console.log(typeof Symbol("id")); // symbol
console.log(typeof Math); // object
console.log(typeof null); // object
console.log(typeof console.log); // function

console.log(String(false)); // false - string form of boolean

console.log("1" + 2 + 3); // 123 - string ‘1’ is concatenated with number 2 then number 3
console.log(1 + 2 + "3"); // 33 - number 1 is added to number 2 then concatenated with string ‘3’

console.log(Number("      4      ")); // 4 - trims spaces
console.log(Number(null)); // 0 - intentionally empty value converts to 0
console.log(Number(undefined)); // NaN - non-existent value is unknown
console.log(Number(false)); // 0 - false converts to 0
console.log(Number(true)); // 1 - true converts to 1
console.log(Number("")); // 0 - empty string converts to 0console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert

console.log("6" / "2"); // 3
console.log("6" * "2"); // 12
console.log("6" - "2"); // 4
console.log(+"6"); // 6

console.log(Boolean("")); // false - empty string
console.log(Boolean(0)); // false - zero value
console.log(Boolean(null)); // false - no value
console.log(Boolean(undefined)); // false - unknown value
console.log(Boolean(NaN)); // false - not a number
console.log(Boolean("false")); // true - non-empty string
console.log(Boolean(-1)); // true - non-zero number

if ("") console.log("empty string is true"); // implicit "" conversion to false - won't print msg
if (undefined) console.log("undefined is true"); // implicit conversion to false - won't print msg

console.log(NaN ? "NaN is true" : "NaN is false"); // NaN is false
console.log(0 ? "zero is true" : "zero is false"); // zero is false
console.log("hello" ? "hello is true" : "hello is false"); // hello is true

console.log(!undefined); // true - convert value to boolean then negate it (opposite)
console.log(!!""); // false - convert value to boolean then negate/toggle twice

console.log("apple" < "banana"); // true - because a is less than b (rule 2)
console.log("eat" < "eaten"); // true - because all characters are the same but eaten is longer (rule 5)

console.log("2" > 1); // true - converts to 2 > 1
console.log("2" != 1); // true - converts to 2 is not equal to 1
console.log("02" === 2); // true - converts to 2 == 2
console.log(true === 1); // true - true converts to 1
console.log(false === 0); // true - false converts to 0
console.log(null === undefined); // true - both convert to 0

sayHiExpression(); // error - cannot access before initialization
sayHiDeclaration(); // works - can be hoisted

const sayHiExpression = function () {
  console.log("Hi");
};
function sayHiDeclaration() {
  console.log("Hi");
}

const sayoHiArrow = () => console.log("Hi"); // arrow function syntax, more concise

const subtract1 = (a, b) => a - b; // most concise version of the belowconst subtract2 = (a, b) => { return a - b }; // does the same thing as above

const sayHiExpression = function () {
  console.log("Hi");
  console.log(arguments);
};
function sayHiDeclaration() {
  console.log("Hi");
  console.log(arguments);
}
const sayHiArrow = () => {
  console.log("Hi");
  console.log(arguments);
};
sayHiDeclaration(); // [Arguments] {}
sayHiExpression(); // [Arguments] {}
sayHiArrow(); // ReferenceError: arguments is not defined

console.log(user.name); // get object property called name and log it
let dogOwner = user["has a dog"]; // get value of property 'has a dog' and assign to new variable
user.age = 21; // set (or assign) new value to object property called age
user.location = "NSW"; // create new object property called location and set (assign) a value
delete user.location; // delete property of user object called location

const user = {
  // user object contained within curly braces
  name: "joe", // string property with key 'name' and value 'joe'
  age: 20, // numeric property with key 'age' and value 20
  "has a dog": true, // multi-word property key 'has a dog' with boolean value true
};

console.log(kayc.lefever);
let hairStylist = kayc['does hair'];
kayc.age = 25;
kayc.favoriteartist = 'Tyler the Creator'
delete.kayc.favoriteartist; 