/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  let result = 0;

  // for (let n of derived) is less efficient
  for (let i = 0; i < derived.length; i++) {
    result ^= derived[i];
  }

  return result === 0;
};

var doesValidArrayExist2 = function (derived) {
  let first = 0;
  let last = 0;

  for (let n of derived) {
    if (n) {
      last = ~last;
    }
  }

  return first === last;
};

console.log(doesValidArrayExist([1, 1, 0]));
console.log(doesValidArrayExist([1, 1]));
console.log(doesValidArrayExist([1, 0]));
