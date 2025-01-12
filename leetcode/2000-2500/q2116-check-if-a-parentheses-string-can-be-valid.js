/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  if (s.length % 2 === 1) return false;

  let wildCardCount = 0;
  let openCount = 0;
  let closeCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (openCount + wildCardCount < closeCount) return false;
    if (locked[i] === "0") {
      wildCardCount++;
    } else {
      if (s[i] === "(") {
        openCount++;
      } else {
        closeCount++;
      }
    }
  }

  wildCardCount = 0;
  openCount = 0;
  closeCount = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (openCount > closeCount + wildCardCount) return false;
    if (locked[i] === "0") {
      wildCardCount++;
    } else {
      if (s[i] === "(") {
        openCount++;
      } else {
        closeCount++;
      }
    }
  }

  return true;
};

console.log(canBeValid("))()))", "010100"));
console.log(canBeValid("))()))(", "0101000"));
console.log(
  canBeValid(
    "())(()(()(())()())(())((())(()())((())))))(((((((())(()))))(",
    "100011110110011011010111100111011101111110000101001101001111"
  )
);
