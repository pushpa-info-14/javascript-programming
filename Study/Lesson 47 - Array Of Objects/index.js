const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "coconut", color: "white", calories: 159 },
    { name: "pineapple", color: "yellow", calories: 37 },
];

console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

fruits.push({ name: "grapes", color: "purple", calories: 62 });
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);

fruits.forEach((fruit) => {
    console.log(fruit.name);
    console.log(fruit.color);
    console.log(fruit.calories);
});

const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
const fruitCalories = fruits.map((fruit) => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

const maxCalFruit = fruits.reduce((max, fruit) => {
    return fruit.calories > max.calories ? fruit : max;
});

const minCalFruit = fruits.reduce((min, fruit) => {
    return fruit.calories < min.calories ? fruit : min;
});

console.log(maxCalFruit);
console.log(maxCalFruit.calories);
console.log(minCalFruit);
console.log(minCalFruit.calories);
