/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0;
  while (nums[l] !== 0 && l < nums.length) {
    l++;
  }

  for (let r = l + 1; r < nums.length; r++) {
    if (nums[r] !== 0) {
      nums[l] = nums[r];
      nums[r] = 0;
      l++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([1]));
