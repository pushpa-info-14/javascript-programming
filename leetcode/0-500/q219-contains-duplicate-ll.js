/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const window = new Set();

  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (r - l > k) {
      window.delete(nums[l]);
      l += 1;
    }
    if (window.has(nums[r])) {
      return true;
    }
    window.add(nums[r]);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3)); // true
