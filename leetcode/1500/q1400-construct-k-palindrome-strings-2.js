/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (k > s.length) return false;
  const countArray = Array(26).fill(0);

  for (let c of s) {
    countArray[c.charCodeAt(0) - 97] += 1;
  }

  let oddCount = 0;

  for (let i = 0; i < 26; i++) {
    oddCount += countArray[i] % 2;
  }
  return oddCount <= k;
};

console.log(canConstruct("annabelle", 2));
console.log(canConstruct("leetcode", 3));
console.log(canConstruct("true", 4));
