/**
 * Function - A section of reusable code.
 *            Declare code once, use it whenever you want.
 *            Call the function to execute that code.
 */

function happyBirthday(username, age) {
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear ${username}!`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old`);
}

happyBirthday("Pushpa", 30);

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function isEven(x) {
    return x % 2 == 0 ? true : false;
}

function isOdd(x) {
    return x % 2 == 1 ? true : false;
}

function isValidEmail(email) {
    return email.includes("@") ? true : false;
}

console.log(add(3, 2));
console.log(subtract(3, 2));
console.log(multiply(3, 2));
console.log(divide(3, 2));
console.log(isEven(3));
console.log(isEven(4));
console.log(isOdd(3));
console.log(isOdd(4));
console.log(isValidEmail("pushpa.info.14@gmail.com"));
