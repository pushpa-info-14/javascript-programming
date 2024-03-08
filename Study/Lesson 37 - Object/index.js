/**
 * Object - A collection of related properties and/or methods.
 *          Can represent real world objects (people, products, places)
 *          Object = {key:value, function()}
 */

const person1 = {
    firstName: "Pushpa",
    lastName: "Kumara",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log(`Hi, I am Pushpa Kumara`),
    eat: () => console.log(`I am eating a Krabby Patty`),
};

const person2 = {
    firstName: "Saman",
    lastName: "Priyantha",
    age: 35,
    isEmployed: true,
    sayHello: () => console.log(`Hi, I am Saman Priyantha`),
    eat: () => console.log(`I am eating roast beef, chicken and pizza`),
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
