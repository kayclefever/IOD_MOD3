const user = { name: "Elliot", age: 27 };
const userClone = { ...user, age: 28, location: "New Zealand" };
console.log(userClone); // { name: 'Elliot', age: 28, location: 'New Zealand' }
