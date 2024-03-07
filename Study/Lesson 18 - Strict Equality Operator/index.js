/**
 *    = assignment operator
 *   == comparison operator (compare if values are equal)
 *  === strict equality operator (compare if values & datatypes are equal)
 *   != inequality operator
 *  !== strict inequality operator
 */

const PI = "3.14";
// const PI = 3.14;

if (PI == "3.14") {
    console.log("That is PI");
} else {
    console.log("That is not PI");
}

if (PI === "3.14") {
    console.log("That is PI");
} else {
    console.log("That is not PI");
}

if (PI != "3.14") {
    console.log("That is not PI");
} else {
    console.log("That is PI");
}

if (PI !== "3.14") {
    console.log("That is not PI");
} else {
    console.log("That is PI");
}
