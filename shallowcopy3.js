const user = { name: "Elliot", age: 27 };
const vehicle = { make: "Toyota", model: "Camry" };
const mergedUser = { ...user, ...vehicle };
console.log(mergedUser); // { name: 'Elliot', age: 27, make: 'Toyota', model: 'Camry' }
