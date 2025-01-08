/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let s = x + "";

  let l = 0;
  let r = s.length - 1;

  while (l <= r) {
    if (s[l] == s[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
