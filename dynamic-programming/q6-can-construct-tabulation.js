const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);

  table[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      const suffix = target.slice(i);
      for (let word of wordBank) {
        if (suffix.indexOf(word) === 0) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  canConstruct("skateboard", ["bo", "ard", "ate", "t", "ska", "sk", "boar"])
); // true
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // false

// m = target.length
// n = wordBank.length
// O(m²n) time
// O(m) spcae
