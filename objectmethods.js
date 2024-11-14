const user = {
  name: "Bilbo Baggins",
  sing: function () {
    // method of user object
    console.log("Roads go ever ever on");
  },
  sing2() {
    // shorthand method syntax, does same as above
    console.log("Over rock and under tree");
  },
};
user.sing(); // Roads go ever ever on
user.sing2(); // Over rock and under tree

const user1 = {
  name: "Bilbo Baggins",
  printGreeting() {
    console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
  },
};
// 'user' is before the dot, provides the context where 'this' comes from
user1.printGreeting(); // Hello, I'm Bilbo Baggins

const user3 = {
  name: "Bilbo Baggins",
  printThis() {
    console.log(this); // 'this' is the current object
    return this; // if we return it, we can 'chain' object methods together
  },
  printGreeting() {
    console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
  },
};
user3.printThis().printGreeting(); // methods chained together, works because printThis returns this
