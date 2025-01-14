/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const map = {};
  for (let c of s) {
    if (!map[c]) {
      map[c] = 1;
    } else {
      map[c]++;
    }
  }

  let result = 0;
  for (let key of Object.keys(map)) {
    if (map[key] % 2 === 0) {
      result += 2;
    } else {
      result += 1;
    }
  }
  return result;
};

console.log(minimumLength("abaacbcbb"));
console.log(minimumLength("aa"));
