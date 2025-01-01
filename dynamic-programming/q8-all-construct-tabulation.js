const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    if (table[i].length > 0) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          const newCombinations = table[i].map((subArray) => [
            ...subArray,
            word,
          ]);
          table[i + word.length].push(...newCombinations);
        }
      }
    }
  }

  return table[target.length];
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // [ [ 'abc', 'def' ] ]
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
// [
//   [ 'ab', 'cd', 'ef' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abc', 'def' ],
//   [ 'abcd', 'ef' ]
// ]
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // []
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
[
  ["enter", "a", "p", "ot", "ent", "p", "ot"],
  ["enter", "a", "p", "ot", "ent", "p", "o", "t"],
  ["enter", "a", "p", "o", "t", "ent", "p", "ot"],
  ["enter", "a", "p", "o", "t", "ent", "p", "o", "t"],
];
// console.log(
//   allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// ); // Maximum call stack size exceeded
// console.log(
//   allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// ); // Maximum call stack size exceeded

// m = target.length
// n = wordBank.length
// O(n^m) time exponential
// O(n^m) space exponential
