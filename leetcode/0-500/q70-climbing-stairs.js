var climbStairs = function (n) {
  const table = Array(n + 1).fill(0);

  table[0] = 1;

  for (let i = 0; i <= n; i++) {
    if (table[i] > 0) {
      if (i + 1 <= n) table[i + 1] += table[i];
      if (i + 2 <= n) table[i + 2] += table[i];
    }
  }

  return table[n];
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
