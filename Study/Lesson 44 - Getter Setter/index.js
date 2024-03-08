/**
 * Getter - Special method that makes a property readable
 * Setter - Special method that makes a property writeable
 *
 * Validate and modify a value when reading/writing a property
 */

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(width) {
        if (width > 0) {
            this._width = width;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(height) {
        if (height > 0) {
            this._height = height;
        } else {
            console.error("Height must be a positive number");
        }
    }

    get width() {
        return `${this._width.toFixed(1)}cm`;
    }

    get height() {
        return `${this._height.toFixed(1)}cm`;
    }

    get area() {
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

rectangle.width = 5;
rectangle.height = 10;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(firstName){
        if(typeof firstName === "string" && firstName.length > 0){
            this._firstName = firstName;
        } else{
            console.error("FirstName must be a non-empty string")
        }
    }
    set lastName(lastName){
        if(typeof lastName === "string" && lastName.length > 0){
            this._lastName = lastName;
        } else{
            console.error("LastName must be a non-empty string")
        }
    }

    set age(age){
        if(typeof age === "number" && age >= 0){
            this._age = age;
        } else{
            console.error("Age must be a non-negative number")
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
