// 1. What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0; //  answer: 10
console.log("" + 1 + 0); // result: 10

"" - 1 + 0; // answer: -1
console.log("" - 1 + 0); // result: -1

true + false; // answer: 1
console.log(true + false); // result: 1

!true; // answer: false
console.log(!true); // result: false

6 / "3"; // answer: 2
console.log(6 / "3"); // result: 2

"2" * "3"; // answer: 6
console.log("2" * "3"); // result: 6

4 + 5 + "px"; // answer: 9px
console.log(4 + 5 + "px"); // result 9px

"$" + 4 + 5; // answer: $45
console.log("$" + 4 + 5); // result: $45

"4" - 2; // answer: 2
console.log("4" - 2); // result: 2

"4px" - 2; // answer: NaN
console.log("4px" - 2); // result: NaN

" -9 " + 5; // answer: -95
console.log("-9" + 5); // result: -95

" -9 " - 5; // answer: -14
console.log("-9" - 5); // result: -14

null + 1; // answer: 1
console.log(null + 1); // result: 1

undefined + 1; // answer: Nan
console.log(undefined + 1); // result: NaN

undefined == null; // answer: true
console.log(undefined == null); // result: true

undefined === null; // answer: false
console.log(undefined === null); // result: false

" \t \n" - 2; // answer: -2
console.log(" \t \n" - 2); // result: -2

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?
let addition = three + four; // value: 34 -- this one is not giving the right answer because the numbers are numeric strings since they are wrapped in "". To fix this, we would have to remove the quotes from 3 and 4. ex: let three = 3, let four = 4.
let multiplication = three * four; // value: 12
let division = three / four; // value: 0.75
let subtraction = three - four; // value: -1
let lessThan1 = three < four; // value: true
let lessThan2 = thirty < four; // value: true -- this one is not giving the right answer either because of the same issue. Since there is quotations around the numbers, they are viewed as numeric strings so the < is comparing the first character of both numeric strings, and the letter f comes before t hence why thirty < four is true. In order to fix this we have to remove the quotes from 4 and 30 so the answer comes out correct which is false.

console.log(three + four);
console.log(three * four);
console.log(three / four);
console.log(three - four);
console.log(three < four);
console.log(thirty < four);

// 3. Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true"); // This console.log message will print because the quotations allow the 0 to be seen as a string (giving it value) which makes the console.log message print and makes it true, but a 0 with no quotes (like the first console.log message) is false because it is read as a number and has zero value hence why the console.log message does not print.
if (null) console.log("null is true");
if (-1) console.log("negative is true"); //This console.log message will print because -1 is infact a negative number and it is being read as a number because it has no quotations.
if (1) console.log("positive is true"); // This console.log message will print because 1 is infact a positive number and it is being read as a number because it does not have quotations around it.

// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 24,
  b = 22;
let result = `${a} + ${b} is `;
if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}
console.log(a + b < 10 ? "less than 10" : "greater than 10"); // console.log message printed out less than 10 with original values from exercise. I then swtiched the value of a = 24 and b = 22 and the console.log message printed out greater than 10.

// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
//a)
const getGreeting = function (name) {
  console.log("Hello " + name + "!");
};
getGreeting("KayC");
//b)
const getGreeting1 = (name) => {
  console.log("Hello " + name + "!");
};
getGreeting1("KayC");

// 6. a) Complete the inigo object by adding a lastName property and including it in thegreeting.
//    b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.
//    c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) => {
    return person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

// 7. The following object represents a basketball game and keeps track of the score as the game progresses.
//     a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
//     b) Add a new method to print the full time final score
//     c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
//     d) Test your object by chaining all the method calls together in different combinations.

//modify each of the above object methods to enable function chaining as below:
const basketballGame = {
  score: 0,
  fouls: 0,

  freeThrow() {
    this.score++;
    return this;
  },

  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },

  halfTime() {
    console.log(`Halftime score is ${this.score} with ${this.fouls} fouls.`);
    return this;
  },

  fullTime() {
    console.log(`Final score is ${this.score} with ${this.fouls} fouls.`);
    return this;
  },

  foul() {
    this.fouls++;
    return this;
  },
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .foul()
  .halfTime()
  .basket()
  .foul()
  .threePointer()
  .fullTime();

// 8. The object below represents a single city.
//    a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
//    b)Create a new object for a different city with different properties and call your function again with the new object.
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
for (let key in sydney) {
  console.log("key  " + key);
  console.log("value " + sydney[key]);
}

const miami = {
  name: "Miami",
  county: "Miami-Dade",
  country: "United States",
  basketballteam: "Miami Heat",
};
for (let key in miami) {
  console.log("key " + key);
  console.log("value " + miami[key]);
}
// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

moreSports = [...teamSports];
moreSports.push("Baseball");
moreSports.unshift("Basketball");

let dog2 = dog1;
dog2 = "Koda";

cat2 = { ...cat1 };
cat2.name = "Willow";

console.log("teamSports:", teamSports); // changed
console.log("dog1:", dog1); // stayed the same
console.log("cat1:", cat1); // changed

console.log("Original and changes to original");
console.log("teamSports:", teamSports);
console.log("cat1:", cat1);
console.log("moreSports:", moreSports);
console.log("cat2:", cat2);

// 10. The following constructor function creates a new Person object with the given name and age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    return this.age >= 16;
  };
}
const person1 = new Person("Kai", 28);
const person2 = new Person("Orion", 12);

console.log("Person 1", person1);
console.log("Is Kai old enough to drive?", person1.canDrive());

console.log("Person 2:", person2);
console.log("Is Orion old enough to drive?", person2.canDrive());

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 16;
  }
}

const person3 = new PersonClass("Damon", 45);
console.log("Person 3:", person3);
console.log("Is Damon old enough to drive?", person3.canDrive());
