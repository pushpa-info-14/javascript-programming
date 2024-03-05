/**
 * Variable - A container that stores a value.
 *            Behaves as if it were the value it contains.
 * 
 * 1. Declaration   let x;
 * 2. Assignment    x = 100;
 */

/**
let x;
x = 100;

console.log(x);

let y = 200;

console.log(y);

let age = 25;
let price = 10.99;
let gpa = 3.14;

console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is $${price}`);

let firstName = "Pushpa";
let favoriteFood = "pizza";
let email = "pushpa.info.14@gmail.com"

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`Your like ${favoriteFood}`);
console.log(`Your email ${email}`);

let isOnline = true;
let isForSale = true;
let isEnrolled = true;

console.log(`Pushpa is online: ${isOnline}`);
console.log(`Is this car for sale: ${isForSale}`);
console.log(`Is Enrolled: ${isEnrolled}`);
*/

let fullName = "Pushpa Kumara";
let age = 25;
let isEnrolled = false;

document.getElementById("myP1").textContent = `Your name is ${fullName}`;
document.getElementById("myP2").textContent = `You are ${age} years old`;
document.getElementById("myP3").textContent = `Enrolled : ${isEnrolled}`;
