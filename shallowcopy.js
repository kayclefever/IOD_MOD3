const user = { name: "Elliot", age: 27 };
const userClone = { ...user }; // spread or unpack user properties into new object
console.log(userClone); // { name: 'Elliot', age: 27 }
