/**
 * Callback = A function that is passed as an argument
 *            to another function.
 *
 *            Used to handle asynchronous operations
 *            1. Reading a file
 *            2. Network requests
 *            3. Interacting with databases
 *
 *            "Hey, when you're done, call this next."
 */

function hello(callback) {
    console.log("Hello!");
    callback();
}

function wait() {
    console.log("Wait!");
}

function leave() {
    console.log("Leave!");
}

function goodbye() {
    console.log("Goodbye!");
}

hello(goodbye);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}

sum(displayConsole, 1, 2);
sum(displayPage, 1, 2);
