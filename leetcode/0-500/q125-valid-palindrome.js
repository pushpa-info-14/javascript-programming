/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let alphanumeric = "";

  for (let c of s) {
    if (/[a-zA-Z0-9]/.test(c)) {
      alphanumeric += c.toLocaleLowerCase();
    }
  }

  let l = 0;
  let r = alphanumeric.length - 1;
  while (l <= r) {
    if (alphanumeric[l] !== alphanumeric[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

var isPalindrome2 = function (s) {
  s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  return s === s.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome2("A man, a plan, a canal: Panama"));
