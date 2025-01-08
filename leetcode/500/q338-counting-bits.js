/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = [0];

  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (offset * 2 == i) {
      offset = i;
    }

    dp.push(1 + dp[i - offset]);
  }

  return dp;
};

console.log(countBits(0)); // [0]
console.log(countBits(1)); // [0, 1]
console.log(countBits(2)); // [0, 1, 1]
console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
