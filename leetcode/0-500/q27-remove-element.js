/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = null;
    }
    if (nums[i] !== null) {
      nums[l] = nums[i];
      l++;
    }
  }

  return l;
};

console.log(removeElement([1, 1, 2, 2], 2));
