/**
 * Write a function 'canConstruct(target, wordBank)' that accepts a
 * target string and an array of strings.
 *
 * The function should return the number of ways that the
 * 'target' can be constructed by concatenating elements of the
 * 'wordBank' array.
 *
 * You may reuse elements of 'wordBank' as many times as needed.
 */

const countConstruct = (target, wordBank) => {
  if (target === "") return 1;

  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      totalCount += countConstruct(suffix, wordBank);
    }
  }

  return totalCount;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4
// console.log(
//   countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// ); // 0

// m = target.length
// n = wordBank.length
// O(n^m * m) time
// O(m²) spcae
