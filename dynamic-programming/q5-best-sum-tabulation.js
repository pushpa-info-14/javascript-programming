const bestSum = (targetSum, numbers, memo = {}) => {
  const table = Array(targetSum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === null) continue;
    for (let num of numbers) {
      if (i + num > targetSum) continue;
      if (
        table[i + num] === null ||
        table[i + num].length > table[i].length + 1
      ) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum(7, [2, 3])); // [2, 2, 3]
console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]

// m = target sum
// n = numbers.length
// O(m²n) time
// O(m²) space
