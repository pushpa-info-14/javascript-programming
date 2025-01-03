/**
 * Map
 * - Also known as Associative Array, Dictionary
 * - Key-value data structure
 * - Keys are unique
 */

const m = new Map();
console.log("Empty map: ", m);

m.set("key1", { name: "Map", order: 16 });
m.set("key2", { name: "Set", order: 6 });
console.log("Map with two elements: ", m);

console.log("Check key1: ", m.has("key1"));
console.log("Get by key2: ", m.get("key2"));

m.delete("key1");
console.log("Size after deleting key2: ", m.size);
