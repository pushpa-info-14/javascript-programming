/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, memo = {}) {
  if (memo[n]) return memo[n];

  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  const result =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  memo[n] = result;
  return result;
};

console.log(tribonacci(4));
