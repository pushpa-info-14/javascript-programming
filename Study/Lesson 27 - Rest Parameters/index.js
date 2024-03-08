/**
 * Rest Parameters - (...rest) allows a function to with a variable
 *                   number of arguments by bundling them into an array
 * 
 *                   spread = expands an array into separate elements
 *                   rest = bundles separate elements in to an array
 */

function openFridge(...foods){
    console.log(foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);

function sum(...numbers){
    let result = 0;
    for (let number of numbers) {
        result += number;
    }

    return result;
}

function getAverage(...numbers){
    let result = 0;
    for (let number of numbers) {
        result += number;
    }

    return result / numbers.length;
}

const total = sum(1, 2, 3, 4, 5, 6);
console.log(total);

const average = getAverage(1, 2, 3, 4, 5, 6);
console.log(average);

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr", "Pushpa", "Kumara");
console.log(fullName);
