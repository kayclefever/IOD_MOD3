const room = {
  number: 23,
};
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};
console.log(JSON.stringify(meetup, ["title", "participants"])); // just stringify the properties in the array: {"title":"Strategy Conference","participants":["Chris","Tina"]}

console.log(
  JSON.stringify(
    meetup,
    function (key, value) {
      if (key != "" && value == meetup)
        return undefined; // skip references to current object
      else if (typeof value == "function") return value.toString(); // stringify functions
      return value; // otherwise return original value unchanged
    },
    2
  )
); // use 2 spaces for nicer formatting

const room1 = {
  number: 23,
  toJSON() {
    return this.number;
  },
};
const meetup1 = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};
meetup1.place = room1; // meetup references room
room1.occupiedBy = meetup1; // room references meetup
console.log(JSON.stringify(meetup1)); // no more circular references as room stringifies to 23
// {"title":"Strategy Conference","participants":["Chris","Tina"],"place":23}

const meetup2 = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
  date: "2023-06-01",
};
const meetup2String = JSON.stringify(meetup2); // convert object to string
const meetup2Parsed = JSON.parse(meetup2String, (key, value) => {
  // convert string to object
  if (!isNaN(Date.parse(value))) return new Date(value); // if valid date, create Date object
  return value;
});
console.log(meetup2Parsed); // { title, participants: (as above), date: 2023-06-01T00:00:00.000Z }

const box1 = {
  size: "large",
  dimensions: { width: 50, length: 70, height: 30, units: "cm" },
  items: ["glasses", "plates", "cutlery"],
};
const boxString = JSON.stringify(box1); // convert object to string
const box2 = JSON.parse(boxString); // convert string back to new object
// how could we check to make sure both boxes are the same but independent?

if (boxString.match(box2)) {
  console.log("Boxes are equal");
}
