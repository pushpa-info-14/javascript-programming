const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);

  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    const suffix = target.slice(i);
    for (let word of wordBank) {
      if (suffix.indexOf(word) === 0) {
        table[i + word.length] += table[i];
      }
    }
  }

  return table[target.length];
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // 0

// m = target.length
// n = wordBank.length
// O(m²n) time
// O(m) spcae
