/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [-1];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length > 0) {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }

  return maxLength;
};

// console.log(longestValidParentheses("(()")); // 2
console.log(longestValidParentheses(")()())")); // 4
// console.log(longestValidParentheses("")); // 0
// console.log(longestValidParentheses("()(()")); //2
