/**
 * Write a function 'howSum(targetSum, numbers)' that takes in a
 * targetSum and an array of numbers as arguments.
 *
 * The function should return an array containing any combination of
 * element that add up to exactly the targetSum. If there is no
 * combination that adds up to targetSum, then return null.
 *
 * If there are multiple combinations possible, you may return any
 * single one.
 */

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (let num of numbers) {
    const result = howSum(targetSum - num, numbers, memo);
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(0, [1, 2, 3])); // []
console.log(howSum(300, [7, 14])); // null

// m =  target sum
// n = array length
// O(n * m²) time // ² Alt + 0178
// O(m²) space
