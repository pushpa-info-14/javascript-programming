/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 0) return s;

  let start = 0;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromMiddle(s, i, i);
    const len2 = expandFromMiddle(s, i, i + 1);
    const maxLen = Math.max(len1, len2);

    if (length < maxLen) {
      start = i - Math.floor((maxLen - 1) / 2);
      length = maxLen;
    }
  }

  return s.substring(start, start + length);
};

var expandFromMiddle = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // console.log(left, right, s.substring(left + 1, right - 1));
  return right - left - 1;
};

// console.log(longestPalindrome("bab"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("aacabdkacaa"));
