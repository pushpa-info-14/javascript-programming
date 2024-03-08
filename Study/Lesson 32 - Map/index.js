/**
 * .map() - Accepts a callback and applies that function
 *          to each element of an array, then return a new array
 */

const numbers = [1, 2, 3, 4, 5];

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

console.log(numbers);

const squares = numbers.map(square);
console.log(squares);

const cubes = numbers.map(cube);
console.log(cubes);

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}

console.log(students);

const upperCaseStudents = students.map(upperCase);
console.log(upperCaseStudents);

const lowerCaseStudents = students.map(lowerCase);
console.log(lowerCaseStudents);

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];

function formatDates(element) {
    const parts = element.split("-");

    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);
