/**
 * Logical Operators - Used to combine or manipulate boolean values
 *                     AND = &&
 *                     OR  = ||
 *                     NOT = !
 */

const temp = -100;

if (temp > 0 && temp <= 30) {
    console.log(`The weather is GOOD`);
} else {
    console.log(`The weather is BAD`);
}

if (temp <= 0 || temp > 30) {
    console.log(`The weather is BAD`);
} else {
    console.log(`The weather is GOOD`);
}

const isSunny = true;

if (!isSunny) {
    console.log(`It is CLOUDY`);
} else {
    console.log(`It is SUNNY`);
}
