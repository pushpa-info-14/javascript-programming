/**
 * Method Chaining - Calling one method after another in one line of code
 */

/** No method chaining */

let username = window.prompt("Enter your username: ");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLocaleLowerCase();
// username = letter + extraChars;

// console.log(username);

/** With method chaining */

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
