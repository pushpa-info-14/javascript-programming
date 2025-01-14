/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  function check(s, t) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
      if (!map[s[i]]) {
        map[s[i]] = t[i];
      } else {
        if (map[s[i]] !== t[i]) {
          return false;
        }
      }
    }

    return true;
  }

  return check(s, t) && check(t, s);
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
