/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let offset = 0;

  for (let c of s) {
    let index = t.slice(offset).indexOf(c);
    if (index >= 0) {
      offset += index + 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
