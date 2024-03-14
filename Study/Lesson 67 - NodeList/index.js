/**
 * NodeList - Static collection of HTML elements by (id, class, element).
 *            Can be created by using querySelectorAll().
 *            Similar to an array, but no (map, filter, reduce).
 *            NodeList won't update to automatically reflect changes.
 */

let buttons = document.querySelectorAll(".myButton");

// console.log(buttons);

//----------- Add HTML/CSS Properties

// buttons.forEach((button) => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😁";
// });

//------------- Click event listener

// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         event.target.style.backgroundColor = "tomato";
//     });
// });

//-------------- Mouseover + Mouseout event listener

// buttons.forEach((button) => {
//     button.addEventListener("mouseover", (event) => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });

// buttons.forEach((button) => {
//     button.addEventListener("mouseout", (event) => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });

//--------------- Add an element

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButton";

document.body.appendChild(newButton);

console.log(buttons); // 4

buttons = document.querySelectorAll(".myButton");

console.log(buttons); // 5

//----------- Remove an element

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButton");
        console.log(buttons);
    });
});
