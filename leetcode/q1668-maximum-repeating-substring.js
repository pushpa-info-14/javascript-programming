/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let checkWord = word;
  let count = 0;

  while (sequence.includes(checkWord)) {
    count++;
    checkWord += word;
  }

  return count;
};

console.log(maxRepeating("ab", "ab"));
console.log(maxRepeating("ababc", "ab"));
console.log(maxRepeating("ababc", "ba"));
console.log(maxRepeating("ababc", "ac"));
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba")); // 5
