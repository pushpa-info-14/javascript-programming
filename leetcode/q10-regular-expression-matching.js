/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // Top-Down Memoization

  const memo = {};
  const dfs = (i, j) => {
    const key = i + "," + j;
    if (key in memo) return memo[key];

    if (i >= s.length && j >= p.length) {
      return true;
    }
    if (j >= p.length) {
      return false;
    }

    let match = i < s.length && (s[i] === p[j] || p[j] === ".");
    if (j + 1 < p.length && p[j + 1] === "*") {
      memo[key] = dfs(i, j + 2) || (match && dfs(i + 1, j));
      return memo[key];
    }
    if (match) {
      memo[key] = dfs(i + 1, j + 1);
      return memo[key];
    }

    memo[key] = false;
    return false;
  };

  return dfs(0, 0);
};

console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("aa", ".*")); // true
console.log(isMatch("aab", "c*a*b")); // true
console.log(isMatch("mississippi", "mis*is*ip*.")); // true
console.log(isMatch("ab", ".*c")); // false
console.log(isMatch("aaa", "a*a")); // true
