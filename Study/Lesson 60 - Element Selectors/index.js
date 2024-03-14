/**
 * Element Selectors - Methods used to target and manipulate HTML elements.
 *                     They allow you to select one or multiple HTML elements
 *                     from the DOM (Document Object Model).
 *
 * 1. document.getElementById()         // Element or Null
 * 2. document.getElementsClassName()   // HTMLCollection
 * 3. document.getElementsByTagName()   // HTMLCollection
 * 4. document.querySelector()          // Element or Null
 * 5. document.querySelectorAll()       // NodeList
 */

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

// for (const fruit of fruits) {
//     fruit.style.backgroundColor = "yellow";
// }

Array.from(fruits).forEach((fruit) => {
    fruit.style.backgroundColor = "yellow";
});

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
console.log(h4Elements);
console.log(liElements);

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }
// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

Array.from(h4Elements).forEach((h4Element) => {
    h4Element.style.backgroundColor = "yellow";
});
Array.from(liElements).forEach((liElement) => {
    liElement.style.backgroundColor = "lightgreen";
});

const element1 = document.querySelector(".fruits");
element1.style.backgroundColor = "green";
const element2 = document.querySelector("h4");
element2.style.backgroundColor = "green";

const fruits2 = document.querySelectorAll(".fruits");
console.log(fruits2);

fruits2.forEach((fruit) => {
    fruit.style.backgroundColor = "green";
});

const foods = document.querySelectorAll("li");
console.log(foods);

foods.forEach((food) => {
    food.style.backgroundColor = "green";
});
