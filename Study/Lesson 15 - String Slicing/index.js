/**
 * String Slicing - Creating a substring from a portion of another string
 */

const fullName = "Pushpa Kumara";

let firstName = fullName.slice(0, 6);
let lastName = fullName.slice(7);
console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);
console.log(firstChar);
console.log(lastChar);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);

const email = "pushpa.info.14@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);
