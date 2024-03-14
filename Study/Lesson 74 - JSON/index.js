/**
 * JSON - (JavaScript Object Notation) data-interchange format.
 *        Used for exchanging data between a server and a web application.
 *        JSON files {key:value} or [value1, value2, value3]
 *
 *        JSON.stringify() = converts a JS object to a JSON string.
 *        JSON.parse() = converts a JSON string to a JS object.
 */

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    name: "Spongebob",
    age: 30,
    isEmployed: true,
    hobbies: ["Jellyfishing", "Karate", "Cooking"],
};
const people = [
    {
        name: "Spongebob",
        age: 30,
        isEmployed: true,
    },
    {
        name: "Patrick",
        age: 34,
        isEmployed: false,
    },
    {
        name: "Squidward",
        age: 50,
        isEmployed: true,
    },
    {
        name: "Sandy",
        age: 27,
        isEmployed: false,
    },
];

const namesJsonString = JSON.stringify(names);
const personJsonString = JSON.stringify(person);
const peopleJsonString = JSON.stringify(people);

console.log(namesJsonString);
console.log(personJsonString);
console.log(peopleJsonString);

//--------------------------------------------------------------------------------
const parsedNames = JSON.parse(namesJsonString);
const parsedPerson = JSON.parse(personJsonString);
const parsedPeople = JSON.parse(peopleJsonString);

console.log(parsedNames);
console.log(parsedPerson);
console.log(parsedPeople);

//--------------------------------------------------------------------------------
fetch("names.json")
    .then((response) => response.json())
    .then((value) => console.log(value))
    .catch((error) => console.error(error));

fetch("person.json")
    .then((response) => response.json())
    .then((value) => console.log(value))
    .catch((error) => console.error(error));

fetch("people.json")
    .then((response) => response.json())
    .then((values) => values.forEach((value) => console.log(value.name)))
    .catch((error) => console.error(error));
