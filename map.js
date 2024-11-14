const exampleMap = new Map(); // create new empty map object
exampleMap.set(1, "number one"); // 'set' adds a new key-value pair to the map
exampleMap.set("1", "string one"); // maps support keys of different types
exampleMap.set(true, "true"); // can have boolean keys
exampleMap.set({ name: "John" }, { phone: "0412345678" }); // object keys also valid
exampleMap.set("1", "second string one"); // overwrites previous value if key exists
console.log(exampleMap.size); // 4 - number of items in the map
console.log(exampleMap);
// Map(4) { 1 => 'number one', '1' => 'second string one', true => 'true', { name: 'John' } => { phone: '0412345678' } }

console.log(exampleMap.get("1")); // second string one - gets value for matching key
console.log(exampleMap.get(2)); // undefined - key doesn't exist so no value
console.log(exampleMap.has(1)); // true - key does exist
console.log(exampleMap.delete(true)); // true - removes item and returns true if successful
exampleMap.clear(); // removes all items from map
console.log(exampleMap); // Map(0) {}

const recipeMap = new Map([
  ["flour", "1 cup"],
  ["milk", "1/2 cup"],
  ["eggs", 2],
  ["butter", "50g"],
]);
for (let ingredient of recipeMap.keys()) {
  console.log(ingredient); // flour, milk, eggs, butter
}
for (let quantity of recipeMap.values()) {
  console.log(quantity); // 1 cup, 1/2 cup, 2, 50g
}
for (let item of recipeMap) {
  // same as recipeMap.entries()
  console.log(item); // ['flour', '1 cup'], (and so on)
}

const priceMap = new Map([
  ["banana", 1],
  ["pineapple", 2],
  ["watermelon", 5],
]);
const priceObject = Object.fromEntries(priceMap);
console.log(priceObject); // { banana: 1, pineapple: 2, watermelon: 5 }

// Simulate fetching external data, which can be slow
function fetchExternalData(id) {
  console.log(`Fetching data for ID: ${id}`);
  const data = `Data for ID: ${id}`; // Simulated data
  return data;
}
// Create a Map for caching
const cache = new Map();
function getCachedData(id) {
  // Check if data is already in the cache
  if (cache.has(id)) {
    return cache.get(id); // return cached value, no expensive lookup
  }
  // If not in cache, fetch "external" data and store in cache for next time
  const data = fetchExternalData(id);
  cache.set(id, data);
  return data;
}
// Example usage
console.log("#1: " + getCachedData(1)); // First time: fetches "external" data and caches result
console.log("#2: " + getCachedData(1)); // Other times: can fetch result from cache, much faster
