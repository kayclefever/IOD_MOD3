// 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.
console.log(ucFirstLetters("los angeles")); //Los Angeles
function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("new york city"));
console.log(ucFirstLetters("camp flog gnaw"));
console.log(ucFirstLetters("frank ocean"));
console.log(ucFirstLetters("vince staples"));
console.log(ucFirstLetters("birds of a feather"));

// 2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.
console.log(truncate("This text will be truncated if it is too long", 25));
// This text will be truncat...
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max - 3) + "...";
  } else {
    return str;
  }
}
console.log(truncate("This text will be truncated if it is too long", 25));

function truncateWithTernary(str, max) {
  return str.length > max ? str.slice(0, max - 3) + "..." : str;
}
console.log(
  truncateWithTernary("This text will be truncated if it is too long", 25)
);

// 3. Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips:
// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.
const animals = ["Tiger", "Giraffe"];
console.log(animals);

animals.push("Panda", "Bull");
console.log("Adding values to the end", animals);

animals.unshift("Bear", "Panther");
console.log("Adding values to the beginning", animals);

animals.sort();
console.log("Alphabetical Order", animals);

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal("Monkey");
console.log("Replacing middle animal", animals);

function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
}

console.log('Animals that start with "B":', findMatchingAnimals("B"));
console.log('Animals that start with "p":', findMatchingAnimals("p"));

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.
function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

function camelCaseForOf(cssProp) {
  const words = cssProp.split("-");
  let result = words[0];

  for (const word of words.slice(1)) {
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return result;
}

console.log(camelCaseForOf("margin-left")); // marginLeft
console.log(camelCaseForOf("background-image")); // backgroundImage
console.log(camelCaseForOf("display")); // display

function camelCaseFor(cssProp) {
  const words = cssProp.split("-");
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return result;
}

console.log(camelCaseFor("margin-left")); // marginLeft
console.log(camelCaseFor("background-image")); // backgroundImage
console.log(camelCaseFor("display")); // display

function camelCaseWithTernary(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelCaseWithTernary("margin-left")); // marginLeft
console.log(camelCaseWithTernary("background-image")); // backgroundImage
console.log(camelCaseWithTernary("display")); // display

function camelCaseWithoutTernary(cssProp) {
  const words = cssProp.split("-");
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return result;
}

console.log(camelCaseWithoutTernary("margin-left")); // marginLeft
console.log(camelCaseWithoutTernary("background-image")); // backgroundImage
console.log(camelCaseWithoutTernary("display")); // display

// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
// this doesn't work because the toFixed()only affects the string representation of the number not the actual floating-point value. So, the numbers come out as strings not numbers. So the fixedTwenty + fixedTen concatenates the strings instead of adding the numbers.

function currencyAddition(float1, float2) {
  const factor = 100;
  return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}
function currencyOperation(float1, float2, operation) {
  const factor = 100;
  const int1 = Math.round(float1 * factor);
  const int2 = Math.round(float2 * factor);
  let result;

  switch (operation) {
    case "+":
      result = (int1 + int2) / factor;
      break;
    case "-":
      result = (int1 - int2) / factor;
      break;
    case "*":
      result = (int1 * int2) / (factor * factor);
      break;
    case "/":
      result = int1 / int2;
      break;
    default:
      throw new Error("Unsupported operation");
  }
  return result;
}
function currencyOperation(float1, float2, operation, numDecimals = 2) {
  if (numDecimals < 1 || numDecimals > 10) {
    throw new Error("numDecimals must be between 1 and 10");
  }

  const factor = Math.pow(10, numDecimals);
  const int1 = Math.round(float1 * factor);
  const int2 = Math.round(float2 * factor);
  let result;

  switch (operation) {
    case "+":
      result = (int1 + int2) / factor;
      break;
    case "-":
      result = (int1 - int2) / factor;
      break;
    case "*":
      result = (int1 * int2) / (factor * factor);
      break;
    case "/":
      result = int1 / int2;
      break;
    default:
      throw new Error("Unsupported operation");
  }

  return parseFloat(result.toFixed(numDecimals));
}
console.log(0.3 === currencyAddition(0.1, 0.2));
console.log(0.3 === currencyOperation(0.1, 0.2, "+"));

console.log(currencyAddition(0.1, 0.2) === 0.3);
console.log(currencyAddition(0.15, 0.25) === 0.4);
console.log(currencyOperation(0.1, 0.2, "+") === 0.5);
console.log(currencyOperation(0.4, 0.1, "-") === 0.3);
console.log(currencyOperation(0.1, 0.2, "*") === 0.056);
console.log(currencyOperation(0.3, 0.1, "/") === 3);
console.log(currencyOperation(0.2, 0.7, "+", 2) === 0.9);
console.log(currencyOperation(0.12345, 0.54321, "+", 4) === 0.6667);
console.log(currencyOperation(0.1, 0.2, "*", 3) === 0.02);
console.log(currencyOperation(1.0, 3.0, "/", 2) === 0.33);

// 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray. Test with the following arrays and create another one of your own.
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const artists = [
  "tyler the creator",
  "frank ocean",
  "vince staples",
  "mac miler",
  "frank ocean",
  "billie eilish",
  "tyler the creator",
  "justin bieber",
  "vince staples",
];
console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(artists));

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

// 7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.

function getBookTitle(bookId) {
  const book = books.find((b) => b.id === bookId);
  return book ? book.title : null;
}
console.log(getBookTitle(1)); // "The Great Gatsby"
console.log(getBookTitle(2));
console.log(getBookTitle(3)); // "1984"
console.log(getBookTitle(4));
console.log(getBookTitle(5)); // null (no book with id 6)

// b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
function getOldBooks() {
  return books.filter((b) => b.year < 1950);
}
console.log(getOldBooks());

// c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
function addGenre() {
  return books.map((b) => ({ ...b, genre: "classic" }));
}
console.log(addGenre());

// d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.
function getTitles(authorInitial) {
  return books
    .filter((b) => b.author.startsWith(authorInitial))
    .map((b) => b.title);
}
console.log(getTitles("J"));
console.log(getTitles("A"));

// e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
function latestBook() {
  let latest = books[0];
  books.forEach((book) => {
    if (book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}
console.log(latestBook());

// 8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map();
phoneBookDEF.set("Damon", "0461234567");
phoneBookDEF.set("Elena", "0472345678");
phoneBookDEF.set("Felicia", "0483456789");

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const phoneBookDEF1 = new Map([
  ["Damon", "0461234567"],
  ["Elena", "0472345678"],
  ["Felicia", "0483456789"],
]);

// c) Update the phone number for Caroline

phoneBookABC.set("Caroline", "0466221199");

// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map

function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
    console.log(`${name}: ${phoneNumber}`);
  });
}
printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map(phoneBookABC);

phoneBookDEF.forEach((phoneNumber, name) => {
  phoneBook.set(name, phoneNumber);
});

// f) Print out the full list of names in the combined phone book
console.log(Array.from(phoneBook.keys()));

// 9. Given the below salaries object, perform the following tasks.

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}
console.log(sumSalaries(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

function topEarner(salaries) {
  const topEarnerEntry = Object.entries(salaries).reduce((top, current) => {
    return current[1] > top[1] ? current : top;
  });
  return topEarnerEntry[0];
}
console.log(topEarner(salaries));

// 10. 10.The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today

const minutesToday = today.getHours() * 60 + today.getMinutes();
console.log(minutesToday + "minutes have passed so far today");

// b) Print the total number of seconds that have passed so far today

const secondsToday = minutesToday * 60 + today.getSeconds();
console.log(secondsToday + "seconds have passed so far today");

// c) Calculate and print your age as: 'I am x years, y months and z days old'

const birthDate = new Date("1999-04-24");
const ageYears = today.getFullYear() - birthDate.getFullYear();
let ageMonths = today.getMonth() - birthDate.getMonth();
let ageDays = today.getDate() - birthDate.getDate();

if (ageMonths < 0) {
  ageMonths += 12;
  ageYears--;
}
if (ageDays < 0) {
  const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
  ageDays += prevMonth.getDate();
  ageMonths--;
}

console.log(
  `I am ${ageYears} years, ${ageMonths} months, and ${ageDays} days old`
);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

function daysInBetween(date1, date2) {
  const timeDiff = Math.abs(date2 - date1);
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.floor(timeDiff / oneDay);
}
const someDate = new Date("2024-11-14");
console.log(
  `Days between today and April 24th, 1999: ${daysInBetween(
    today,
    birthDate
  )} days`
);
