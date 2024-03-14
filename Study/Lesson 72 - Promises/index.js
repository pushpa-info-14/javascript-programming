/**
 * Promises - An object that manages asynchronous operations.
 *            Wrap a promise object around {asynchronous code}.
 *            "I promise to return a value"
 *            Pending -> Resolved or Rejected
 *            new Promise((resolve, reject) => {asynchronous code})
 *
 * Do these chores in order
 *
 * 1. Walk the dog
 * 2. Clean the kitchen
 * 3. Take out the trash
 */

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWalkDog = true;

            if (isWalkDog) {
                resolve("You walk the dog 🐕‍🦺");
            } else {
                reject("you didn't walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isCleanKitchen = true;

            if (isCleanKitchen) {
                resolve("You clean the kitchen 🧹");
            } else {
                reject("You did not clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isTakeOutTrash = false;

            if (isTakeOutTrash) {
                resolve("You take out the trash ♻");
            } else {
                reject("You did not take out the trash");
            }
        }, 500);
    });
}

walkDog()
    .then((value) => {
        console.log(value);
        return cleanKitchen();
    })
    .then((value) => {
        console.log(value);
        return takeOutTrash();
    })
    .then((value) => {
        console.log(value);
        console.log("You finished all the chores!");
    })
    .catch((error) => console.error(error));
