/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];

  for (let c of s) {
    if (!map[c]) stack.push(c);
    else if (map[c] === stack[stack.length - 1]) stack.pop();
    else return false;
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid(")([])"));
console.log(isValid("(])"));
