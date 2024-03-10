/**
 * Array - A variable like structure that can hold more than 1 value
 */

let fruits = ["apple", "orange", "banana"];

console.log(fruits); // ['apple', 'orange', 'banana']

fruits[0] = "coconut";
console.log(fruits); // ['coconut', 'orange', 'banana']

fruits.push("apple");
console.log(fruits); // ['coconut', 'orange', 'banana', 'apple']

console.log(fruits.pop()); // apple
console.log(fruits); // ['coconut', 'orange', 'banana']

fruits.unshift("mango"); // insert new element at the start
console.log(fruits); // ['mango', 'coconut', 'orange', 'banana']

fruits.shift(); // delete first element
console.log(fruits); // ['coconut', 'orange', 'banana']

let numOfFruits = fruits.length;
console.log(numOfFruits);

console.log(fruits.indexOf("banana"));

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = fruits.length - 1 ; i >= 0; i--) {
    console.log(fruits[i]);
}

fruits.sort().reverse();

for (const fruit of fruits) {
    console.log(fruit);
}

fruits.sort();

fruits.forEach(fruit => {
    console.log(fruit);
});