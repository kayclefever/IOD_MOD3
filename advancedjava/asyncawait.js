const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Simple successful promise"), 250);
});
// using .then to process asynchronously:
promise.then((msg) => console.log(msg));
// using await to process synchronously (if using await in a function it needs to be async):
let msg = await promise;
console.log(msg);
