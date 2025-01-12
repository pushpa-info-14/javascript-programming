/**
 * Write a function 'canConstruct(target, wordBank)' that accepts a
 * target string and an array of strings.
 *
 * The function should return a boolena indicating whether or not the
 * 'target' can be constructed by concatenating elements of the
 * 'wordBank' array.
 *
 * You may reuse elements of 'wordBank' as many times as needed.
 */

const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }

  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
// console.log(
//   canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// ); // false

// m = target.length
// n = wordBank.length
// O(n^m * m) time
// O(m²) spcae
