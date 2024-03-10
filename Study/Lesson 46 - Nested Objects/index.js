/**
 * Nested Objects - Objects inside of other objects.
 *                  Allows you to request more complex data structures.
 *                  Child Object is enclosed by a Parent Object.
 *
 *                  Person{Address{}, ContactInfo{}}
 *                  ShoppingCart{KeyBoard{}, Mouse{}, Monitor{}}
 */

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        City: "Bikini Bottom",
        country: "Int. Waters",
    },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.country);

for (const key in person.address) {
    console.log(person.address[key]);
}

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person(
    "Spongebob",
    30,
    "124 Conch St.",
    "Bikini Bottom",
    "Int. Waters"
);
const person2 = new Person(
    "Patrick",
    37,
    "128 Conch St.",
    "Bikini Bottom",
    "Int. Waters"
);
const person3 = new Person(
    "Squidward",
    45,
    "126 Conch St.",
    "Bikini Bottom",
    "Int. Waters"
);

console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(person2.name);
console.log(person2.age);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);

console.log(person3.name);
console.log(person3.age);
console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);
