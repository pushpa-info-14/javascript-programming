/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  const result = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (groups[i - 1] != groups[i]) {
      result.push(words[i]);
    }
  }

  return result;
};

console.log(getLongestSubsequence(["c"], [0]));
console.log(getLongestSubsequence(["e", "a", "b"], [0, 0, 1]));
console.log(getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1]));
console.log(getLongestSubsequence(["lr", "h"], [0, 0]));
