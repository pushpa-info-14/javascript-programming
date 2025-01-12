/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let prefix = words[j].indexOf(words[i]) === 0;
      let suffix =
        words[j].length >= words[i].length &&
        words[j].slice(words[j].length - words[i].length).indexOf(words[i]) ===
          0;
      if (prefix && suffix) {
        count++;
      }
    }
  }

  return count;
};

console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]));
