/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = Array(cost.length + 1).fill(Infinity);
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 0; i <= cost.length; i++) {
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + cost[i]);
    dp[i + 2] = Math.min(dp[i + 2], dp[i] + cost[i]);
  }

  return dp[cost.length];
};

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
