const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
        /**
         * Warning: Executing JavaScript from a string is an enormous security risk.
         * It is far too easy for a bad actor to run arbitrary code when you use eval(). 
         */
    } catch (error) {
        display.value = "Error";
    }
}
