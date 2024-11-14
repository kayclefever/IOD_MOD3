function checkJson(json) {
  try {
    // ... as above
    return true;
  } catch (err) {
    //... as above
  } finally {
    console.log("at the end"); // always prints, even if returning true or throwing an error
    // used to complete operations and perform cleanup regardless if we hit errors or not,
    // eg. closing db connections, removing interval timers, cancelling event listeners, etc
  }
  return false; // returns false if any error occurred
}
