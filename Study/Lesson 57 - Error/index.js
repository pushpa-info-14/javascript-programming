/**
 * Error - An object that is created to represent a problem that occurs.
 *         Occur often with user input or establishing a connection.
 *
 * try { } - Encloses the code that might potentially cause an error.
 * catch { } - Catch and handle any thrown Errors from try { }.
 * finally { } - (optional) Always executes. Used mostly for cleanup
 *               ex. close files, close connections, release resources
 */

try {
    console.log(x);

    // Network Errors
    // Promise Rejection
    // Security Errors
} catch (error) {
    console.error(error);
} finally {
    console.log("This always executes!");
    // Close Files
    // Close Connections
    // Release Resources
}

console.log("You have reached the end!");

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0) {
        throw new Error("You can't divide by zero!");
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be numbers!");
    }

    const result = dividend / divisor;
    console.log(result);
} catch (error) {
    console.error(error);
}

console.log("You have reached the end!");
