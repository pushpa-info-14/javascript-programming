/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memo = {}) {
  if (n in memo) return memo[n];

  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;

  let result = fib(n - 1, memo) + fib(n - 2, memo);

  memo[n] = result;
  return result;
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
