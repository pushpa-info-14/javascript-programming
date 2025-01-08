/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const result = new Set();

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[i].indexOf(words[j]) >= 0) {
        result.add(words[j]);
      }
    }
  }

  return [...result];
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
console.log(stringMatching(["leetcode", "et", "code"]));
console.log(stringMatching(["blue", "green", "bu"]));
