const gridTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill() // Don't use .fill(Array(n + 1))
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  // for (let i = 1; i <= m; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     table[i][j] += table[i][j - 1] + table[i - 1][j];
  //   }
  // }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i + 1 <= m) table[i + 1][j] += table[i][j];
      if (j + 1 <= n) table[i][j + 1] += table[i][j];
    }
  }

  return table[m][n];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220

// O(m*n) time
// O(m*n) space
