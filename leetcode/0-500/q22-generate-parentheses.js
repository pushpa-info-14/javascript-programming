/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // Only add open paranthesis if open < n
  // Only add a closing paranthesis if closed < open
  // Valid if open === closed === n

  const stack = [];
  const result = [];

  const backtrack = (openN, closeN) => {
    if (openN === closeN && openN === n) {
      return result.push(stack.join(""));
    }

    if (openN < n) {
      stack.push("(");
      backtrack(openN + 1, closeN);
      stack.pop();
    }

    if (closeN < openN) {
      stack.push(")");
      backtrack(openN, closeN + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);
  return result;
};

// Only add open paranthesis if open < n
// Only add a closing paranthesis if closed < open
// Valid if open === closed === n

console.log(generateParenthesis(3));
