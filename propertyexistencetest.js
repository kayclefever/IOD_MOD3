const phone = {
  model: "iPhone 11",
  color: "black",
};
if (phone.color) console.log(`My ${phone.model} is ${phone.color}`); // prints message
if (phone.storage) {
  // undefined counts as false, so the below won't print
  console.log(`My ${phone.model} has ${phone.storage}GB`);
}
