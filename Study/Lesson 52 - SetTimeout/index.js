/**
 * setTimeout() - Function in JavaScript that allows you to schedule
 *                the execution of a function after an amount of time (milliseconds).
 *                Times are approximate (varies based on the workload of the JavaScript runtime env.)
 *
 *                setTimeout(callback, delay);
 */

/**
function sayHello() {
    console.log("Hello");
}

const timeoutId1 = setTimeout(sayHello, 300);
const timeoutId2 = setTimeout(function () {
    console.log("Hello");
}, 300);
const timeoutId3 = setTimeout(() => console.log("Hello"), 300);

clearTimeout(timeoutId1);
*/

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("Cleared");
}
