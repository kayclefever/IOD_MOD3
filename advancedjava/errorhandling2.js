try {
  noSuchVariable;
} catch (error) {
  // error is just a variable name. 'error', 'err' or 'e' are all commonly used
  console.log("caught an error: " + error.message); // all errors have a message property
}
// caught an error: noSuchVariable is not defined
console.log(
  "even though an error occurred above, it was caught so code continues"
);

try {
  setTimeout(() => noSuchVariable, 1000);
} catch (error) {
  // error is just a variable name. 'error', 'err' or 'e' are all commonly used
  console.log("only synchronous errors! " + error.message); // all errors have a message property
}
console.log(
  "prints synchronous code then throws uncaught asynchronous error after 1 sec"
);
