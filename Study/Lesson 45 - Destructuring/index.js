/**
 * Destructuring - Extract values from arrays and objects,
 *                 then assign them to variables in a convenient way
 *                 [] = to perform array destructuring
 *                 {} = to perform oject destructuring
 */

/** Example 1: Swap the value of two variables */

let a = 1;
let b = 2;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);

/** Example 2: Swap 2 elements in an array */

let colors = ["red", "green", "blue", "black", "white"];

console.log(colors);

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

/** Example 3: Assign array elements to variables */

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

/** Example 4: Extract values from objects */

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
};

// const {firstName, lastName, age, job="Unemployed"} = person1;
const { firstName, lastName, age, job = "Unemployed" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

/** Example 5: Destructure in function parameters */

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
