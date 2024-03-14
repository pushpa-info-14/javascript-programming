/**
 * EventListener - Listener for specific events to create interactive web pages.
 *                 Events: click, mouseover, mouseout
 *                 .addEventListener(event, callback);
 */

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event =>{
    // event.target.style.backgroundColor = "tomato";
    // event.target.textContent = "Ouch! 🤕";
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 🤕";
});

myButton.addEventListener("mouseover", event =>{
    // event.target.style.backgroundColor = "yellow";
    // event.target.textContent = "Don't do it 🙄";
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 🙄";
});

myButton.addEventListener("mouseout", event =>{
    // event.target.style.backgroundColor = "lightgreen";
    // event.target.textContent = "Click me 😂";
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me 😂";
});

