/**
 * Spread Operator - ... allows an iterable such as an
 *                   array or string to be expanded
 *                   into separate elements.
 *                   (unpacks the elements)
 */

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

let username = "Pushpa Kumara";

console.log([...username]);
console.log([...username].join("-"));

let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];

console.log(fruits);
console.log(newFruits);

let vegetables = ["carrot", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "egg", "milk"];

console.log(foods);
