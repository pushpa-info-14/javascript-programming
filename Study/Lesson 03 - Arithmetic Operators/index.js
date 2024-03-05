/**
 * Arithmetic Operators - Operands (values, variable, etc.)
 *                        Operators (+ - * /)
 *                        Ex:- 11 = x + 5;
 */

let students = 30;

// students = students + 1;
students += 1;
console.log(students + 1);

// students = students - 1;
students -= 1;
console.log(students);

// students = students * 2;
students *= 2;
console.log(students);

// students = students / 2;
students /= 2;
console.log(students);

// students = students ** 2;
students **= 2;
console.log(students);

// students = students % 2;
students %= 2;
console.log(students);

console.log(students++);
console.log(students--);

/**
 * Operator Precedence
 * 1. Parenthesis ()
 * 2. Exponents
 * 3. Multiplication & division & modulo
 * 4. Addition & subtraction
 */

let result = 1 + 2 * 3 + 4 ** 2; // 1 + 6 + 16 = 23

console.log(result);

result = 12 % 5 + 8 / 2; // 2 + 4 = 6

console.log(result);

result = 6 / 2 ** (2 + 5); // 6 / 2 ** 7 = 6 / 128 = 0.046875

console.log(result);
