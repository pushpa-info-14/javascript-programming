/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      nums[i] = null;
    }
    if (nums[i] !== null) {
      nums[l] = nums[i];
      l++;
    }
  }

  return l;
};

console.log(removeDuplicates([1, 1, 2, 2]));
