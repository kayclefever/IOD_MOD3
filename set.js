const names = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);
names.add("Mateo");
names.add("Oliver");
names.add("Bruno");
console.log(names.size); // 5 - only the unique namesconsole.log(names) // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno

const names1 = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);
// traditional style of for loop - works because Sets are iterable
for (let name of names) {
  console.log(name);
}
// more concise for simple operations, newer syntax using arrow function
names1.forEach((name) => console.log(name));
