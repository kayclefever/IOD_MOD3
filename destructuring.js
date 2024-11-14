const mj = ["Michael", "Jordan"];
const [mjFirst, mjLast] = mj; // destructure (unpack) array on right into separate variables on left
console.log(mjFirst, mjLast); // Michael Jordan

const [jcFirst, jcLast, , , jcPlace] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`); // Julius Caesar is a Roman

const [a, b, c] = "abc"; // strings are iterable, so can break into characters
const [one, two, three] = new Set([1, 2, 3]); // Sets are iterable, so can be destructured
const [[type, quantity]] = new Map([["apple", 4]]); // Maps are iterable too
// now we have 8 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity); // a b c 1 2 3 apple 4

const teeProduct = {
  id: 1,
  title: "Sleeveless Tee",
  price: 23.95,
  category: "Shirts",
};
// key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
  console.log(`${key}: ${value}`); // id: 1, title: Sleeveless Tee, price: 23.95 ...
}

let student = "James",
  teacher = "Andrew";
[student, teacher] = [teacher, student];
console.log(student); // Andrew
console.log(teacher); // James

const [jcFirst1, jcLast1, ...jcTitles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(jcTitles); // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log(jcTitles.length); // 4

const [jcFirst2 = "Unknown", jcLast2, jcTitle = "Consul"] = [
  "Julius",
  "Caesar",
];
console.log(jcFirst2); // Julius
console.log(jcTitle); // Consul

// property names (keys) on right are matched to variable names on left
let { width, height, title } = {
  title: "My Component",
  height: 100,
  width: 200,
};
console.log(width, height, title); // 200 100 My Component

//

function displayComponent({ height = 200, width = 100, title }) {
  console.log(
    `<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`
  );
}
displayComponent({ width: 200, title: "My Awesome Component" });
displayComponent({ title: "My Amazing Component" });
displayComponent({ width: 300, height: 300, title: "My Average Component" });

let options = { width: 200, height: 100, title1: "My Component" };
let { title1, ...rest } = options;
console.log(title1); // My Component
console.log(rest); // { width: 200, height: 100 }
