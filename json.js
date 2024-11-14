const student = {
  name: "Sita",
  age: 28,
  courses: ["HTML", "CSS", "JS"],
  occupation: null,
};
console.log(JSON.stringify(student));
//{"name":"Sita","age":28,"courses":["HTML","CSS","JS"],"occupation":null}

const room = {
  number: 23,
};
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};
meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup
JSON.stringify(meetup); // TypeError: Converting circular structure to JSON
