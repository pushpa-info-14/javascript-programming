/**
 * Arrow Functions - A concise way to write function expressions.
 *                   Good for simple functions that you use only once.
 *                   (parameters) => some code
 */

const hello = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
};

hello("Pushpa", 30);

setTimeout(() => {
    console.log("Hello");
}, 100);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
