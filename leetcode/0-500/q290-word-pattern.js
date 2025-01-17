/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map1 = new Map();
  const map2 = new Map();
  const sArray = s.split(" ");

  if (sArray.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!map1.has(pattern[i])) map1.set(pattern[i], sArray[i]);
    if (!map2.has(sArray[i])) map2.set(sArray[i], pattern[i]);

    if (
      map1.get(pattern[i]) !== sArray[i] ||
      map2.get(sArray[i]) !== pattern[i]
    ) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("abc", "dog cat dog"));
console.log(wordPattern("abba", "dog constructor constructor dog"));
