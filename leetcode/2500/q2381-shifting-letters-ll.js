/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const diff = Array(s.length + 1).fill(0);

  for (let shift of shifts) {
    if (shift[2] == 1) {
      diff[shift[0]]++;
      diff[shift[1] + 1]--;
    } else {
      diff[shift[0]]--;
      diff[shift[1] + 1]++;
    }
  }

  for (i = 1; i < diff.length; i++) {
    diff[i] += diff[i - 1];
  }

  let result = "";
  for (let i = 0; i < s.length; i++) {
    let count = diff[i] % 26;
    if (count < 0) {
      count += 26;
    }

    let code = 97 + ((s[i].charCodeAt(0) - 97 + count) % 26);
    result += String.fromCharCode(code);
  }

  return result;
};

console.log(
  shiftingLetters("abc", [
    [0, 1, 0],
    [1, 2, 1],
    [0, 2, 1],
  ])
);

console.log(
  shiftingLetters("dztz", [
    [0, 0, 0],
    [1, 1, 1],
  ])
);
