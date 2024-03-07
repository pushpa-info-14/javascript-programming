/**
 * String Method - Allow you to manipulate and work with text (strings)
 */

let username = "Pushpa Kumara";

console.log(username.charAt(0));
console.log(username.charAt(1));

console.log(username.indexOf("a"));
console.log(username.lastIndexOf("a"));

console.log(username.length);

username = "   Pushpa Kumara  "
username = username.trim();
console.log(username);

console.log(username.toLocaleLowerCase());
console.log(username.toUpperCase());

username = username.repeat(2);
console.log(username);

username = "Pushpa Kumara"
console.log(username.startsWith("P"));
console.log(username.endsWith("a"));
console.log(username.includes(" "));

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

phoneNumber = "1234567890";
phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);

phoneNumber = "1234567890";
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);
