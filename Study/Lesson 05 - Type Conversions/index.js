/**
 * Type Conversion - Change the data type of a value to another
 *                   (strings, numbers, booleans)
 */

/**
let age = window.prompt("How old are you?");
console.log(age, typeof age);

age = Number(age);
age += 1;
console.log(age, typeof age);
*/

/**
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN 'number'
console.log(y, typeof y); // pizza string
console.log(z, typeof z); // true 'boolean'
*/

/**
let x = 0;
let y = 0;
let z = 0;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // 0 'number'
console.log(y, typeof y); // 0 string
console.log(z, typeof z); // false 'boolean'
*/

/**
let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // 0 'number'
console.log(y, typeof y); //  string
console.log(z, typeof z); // false 'boolean'
*/

let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN 'number'
console.log(y, typeof y); // undefined string
console.log(z, typeof z); // false 'boolean'
