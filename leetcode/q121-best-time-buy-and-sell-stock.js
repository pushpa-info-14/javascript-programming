/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let profit = 0;

  while (right < prices.length) {
    const p = prices[right] - prices[left];
    if (p > profit) profit = p;

    if (prices[left] >= prices[right]) {
      left = right;
    }

    right++;
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([2, 1, 4])); // 3
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9])); // 9
