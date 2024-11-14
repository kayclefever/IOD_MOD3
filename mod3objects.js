let goal = 5;
for (let i = 0; i < goal; i++) {
  console.log(`Iteration ${i} of ${goal}`);
}

const phone = {
  model: "iPhone 11",
  color: "black",
  storage: 64,
};
for (let key in phone) {
  // iterates over each property in the phone object, stores in ‘key’ variable
  console.log("key: " + key); // prints each object property name (key) in turn
  console.log("value: " + phone[key]); // prints each object value in turn
}
