/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // Only add open paranthesis if open < n
  // Only add a closing paranthesis if closed < open
  // Valid if open === closed === n

  const result = [];

  const backtrack = (current, openN, closeN) => {
    if (openN === closeN && openN === n) {
      return result.push(current);
    }

    if (openN < n) {
      backtrack(current + "(", openN + 1, closeN);
    }

    if (closeN < openN) {
      backtrack(current + ")", openN, closeN + 1);
    }
  };

  backtrack("", 0, 0);
  return result;
};

// Only add open paranthesis if open < n
// Only add a closing paranthesis if closed < open
// Valid if open === closed === n

console.log(generateParenthesis(3));
