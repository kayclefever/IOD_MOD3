function User(first, last) {
  // constructor function
  this.first = first;
  this.last = last;
  this.hasShortName = () => this.first.length <= 3;
}
// we can create multiple users with different names
let user1 = new User("Tim", "Smith"); // need to use 'new'
console.log(user1); // User { first: 'Tim', last: 'Smith' }console.log(user1.hasShortName()); // true

class User1 {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  hasShortName() {
    return this.first.length >= 3;
  }
}
let user2 = new User1("Tina", "Smith"); // need to use 'new'
console.log(user2); // User { first: 'Tina', last: 'Smith' }
console.log(user2.hasShortName()); // false
