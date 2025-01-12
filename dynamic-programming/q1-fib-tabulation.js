const fib = (n) => {
  const table = Array(n + 1).fill(0);

  console.log(table);

  table[1] = 1;

  // for (let i = 2; i <= n; i++) {
  //   table[i] = table[i - 1] + table[i - 2];
  // }
  for (let i = 0; i <= n; i++) {
    if (i + 1 <= n) table[i + 1] += table[i];
    if (i + 2 <= n) table[i + 2] += table[i];
  }

  return table[n];
};

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025
console.log(fib(100)); // 354224848179262000000

// O(n) time
// O(n) space
