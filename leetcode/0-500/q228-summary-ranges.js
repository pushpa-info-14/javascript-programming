/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  let result = [];
  let l = 0;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r - 1] + 1 !== nums[r]) {
      if (l === r - 1) {
        result.push(nums[l] + "");
      } else {
        result.push(nums[l] + "->" + nums[r - 1]);
      }
      l = r;
    }
  }

  if (nums[l] !== nums[nums.length - 1]) {
    result.push(nums[l] + "->" + nums[nums.length - 1]);
  } else {
    result.push(nums[nums.length - 1] + "");
  }

  return result;
};

console.log(summaryRanges([]));
console.log(summaryRanges([0]));
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
