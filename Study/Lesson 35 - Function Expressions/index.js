/**
 * Function Declarations - Define a reusable block of code
 *                         that performs a specific task
 *
 * Function Expressions - A way to define functions as
 *                        values or variables
 * 
 * 1. Callbacks in asynchronous operations
 * 2. Higher-Order Functions
 * 3. Closures
 * 4. Event Listeners
 */

const hello = function () {
    console.log("Hello");
};

hello();

setTimeout(hello, 100);
setTimeout(function () {
    console.log("Hello");
}, 100);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});
const cubes = numbers.map(function (element) {
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function (element) {
    return element % 2 === 0;
});
const oddNums = numbers.filter(function (element) {
    return element % 2 !== 0;
});
const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
