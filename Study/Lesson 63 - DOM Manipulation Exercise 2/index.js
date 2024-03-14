//--------------- Example 2 <li> ------------

// Step 1 Create the element
const newListItem = document.createElement("li");

// Step 2 Add attributes/properties
newListItem.textContent = `coconut`;
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// Step 3 Append element to DOM
// document.getElementById("fruits").append(newListItem);
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[0]);

// Remove HTML element

// Select the parent first and remove
// document.getElementById("fruits").removeChild(newListItem);
