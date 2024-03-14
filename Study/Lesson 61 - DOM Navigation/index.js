/**
 * DOM Navigation - The process of navigating through the structure
 *                  of an HTML document using JavaScript.
 * .firstElementChild
 * .lastElementChild
 * .nextElementSibling
 * .previousElementSibling
 * .parentElement
 * .children
 */

//--------------- .firstElementChild -------------------------

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })

//----------------.lastElementChild --------------------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// })

//---------------- .nextElementSibling -----------------------

// const element = document.getElementById("apple");
// element.nextElementSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("fruits");
// element.nextElementSibling.style.backgroundColor = "green";

//--------------- .previousElementSibling --------------------

// const element = document.getElementById("orange");
// element.previousElementSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("banana");
// element.previousElementSibling.style.backgroundColor = "yellow";

//--------------- .parentElement ------------------------------

// const element = document.getElementById("apple");
// element.parentElement.style.backgroundColor = "yellow";

// const element = document.getElementById("cake");
// element.parentElement.style.backgroundColor = "yellow";

//-------------- .children --------------------------------------

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
})
