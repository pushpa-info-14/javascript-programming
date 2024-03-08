/**
 * this - Reference to the object where THIS is used
 *        (the object depends on the immediate context)
 *        person.name = this.name
 */

const person1 = {
    name: "Spongebob",
    favoriteFood: "hamburgers",
    sayHello: function () {
        console.log(`Hi, I am ${this.name}`);
    },
    eat: function () {
        console.log(`${this.name} is eating ${this.favoriteFood}`);
    },
};

const person2 = {
    name: "Patrick",
    favoriteFood: "pizza",
    sayHello: function () {
        console.log(`Hi, I am ${this.name}`);
    },
    eat: function () {
        console.log(`${this.name} is eating ${this.favoriteFood}`);
    },
};

// this keyword does not work with arrow functions.

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();
