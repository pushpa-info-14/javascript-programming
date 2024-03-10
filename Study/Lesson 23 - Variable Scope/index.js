/**
 * Variable Scope - Where a variable is recognized and accessible (local vs global)
 */

let x = 3;

function function1() {
    let x = 1;
    console.log(x); // 1
}

function function2() {
    let x = 2;
    console.log(x); // 2
}

function function3() {
    console.log(x); // 3
}

function function4() {
    console.log(x); // 3
}

function1();
function2();
function3();
function4();
