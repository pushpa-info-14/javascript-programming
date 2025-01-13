/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0;

  while (n) {
    result += n % 2;
    n = n >> 1;
  }

  return result;
};

var hammingWeight2 = function (n) {
  let result = 0;

  while (n) {
    n = n & (n - 1);
    result++;
  }

  return result;
};

console.log(hammingWeight(11));
console.log(hammingWeight2(11));
