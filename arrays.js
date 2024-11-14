console.log(Array.from("string")); // [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log(Array.from(new Set(["cat", "bat", "sat", "cat", "bat"]))); // [ 'cat', 'bat', 'sat' ]
console.log(
  Array.from(
    new Map([
      [1, "one"],
      [2, "two"],
      [3, "three"],
    ])
  )
);
// [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
function makeArray() {
  return Array.from(arguments);
}
console.log(makeArray(1, 2, 3)); // [ 1, 2, 3 ]
