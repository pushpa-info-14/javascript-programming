/**
 * Async/Await - Async = makes a function return a promise
 *               Await = makes an async function wait for a promise
 *
 *               Allows you write asynchronous code in a synchronous manner.
 *               Async doesn't have resolve or reject parameters.
 *               Everything after Await is places in an event queue.
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

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");
    } catch (error) {
        console.error(error);
    }
}

doChores();
