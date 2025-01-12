/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (k > s.length) return false;
  const map = {};

  for (let c of s) {
    if (!map[c]) {
      map[c] = 1;
    } else {
      map[c] += 1;
    }
  }

  let oddCount = 0;

  for (let key of Object.keys(map)) {
    if (map[key] % 2 === 1) {
      oddCount++;
    }
  }

  if (oddCount > k) {
    return false;
  }
  return true;
};

console.log(canConstruct("annabelle", 2));
console.log(canConstruct("leetcode", 3));
console.log(canConstruct("true", 4));
