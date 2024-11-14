let start = 20;
new Promise((resolve, reject) => {
  resolve(start); // resolve promise successfully with value of 10
})
  .then((result) => {
    // when resolve is called, it triggers .then()
    console.log(result);
    return result + start; // values returned from .then() are also promises
  })
  .then((result) => {
    // so we can chain them together
    console.log(result);
    return result + start; // increasing result by 10 each time
  })
  .then((result) => {
    // we can continue to chain them together
    console.log(result);
    return result + start; // increasing result by 10 each time
  });
// prints 10, 20, 30

let start2 = 10;
new Promise((resolve) => setTimeout(() => resolve(start2), start2 * 10))
  .then((result) => {
    // promise handler function inside .then()
    console.log(result);
    let next = result + start2;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // can explicitly return new promises
    console.log(result);
    let next = result + start2;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // which use the results of previously resolved promises in the chain
    console.log(result);
    let next = result + start2;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  });
// prints 10, 20, 30, but with 100, 200 and 300ms delays in between
