/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastCharIndex = -1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " " && lastCharIndex === -1) {
      lastCharIndex = i;
    }
    if (s[i] == " " && lastCharIndex !== -1) {
      return lastCharIndex - i;
    }
  }
  return lastCharIndex + 1;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord(" a"));
