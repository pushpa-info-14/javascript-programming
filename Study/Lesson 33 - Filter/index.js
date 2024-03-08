/**
 * .filter() - Creates a new array by filtering out elements
 */

let numbers = [1, 2, 3, 4, 5, 6, 7];

function isEven(element) {
    return element % 2 == 0;
}

function isOdd(element) {
    return element % 2 == 1;
}

console.log(numbers);

let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

const ages = [16, 17, 18, 18, 20, 60];

function isAdult(element) {
    return element >= 18;
}

function isChild(element) {
    return element < 18;
}

console.log(ages);

let adults = ages.filter(isAdult);
console.log(adults);

let children = ages.filter(isChild);
console.log(children);

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getShortWords(element) {
    return element.length <= 6;
}

function getLongWords(element) {
    return element.length > 6;
}

console.log(words);

let shortWords = words.filter(getShortWords);
console.log(shortWords);

let longWords = words.filter(getLongWords);
console.log(longWords);
