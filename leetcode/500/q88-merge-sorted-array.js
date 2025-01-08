/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let mi = m - 1;
  let ni = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (mi >= 0 && ni >= 0) {
      if (nums1[mi] <= nums2[ni]) {
        nums1[i] = nums2[ni];
        ni--;
      } else {
        nums1[i] = nums1[mi];
        mi--;
      }
    }
  }

  for (let i = 0; i <= ni; i++) {
    nums1[i] = nums2[i];
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1, 5, 6, 10, 0, 0], 4, [2, 7], 2));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
console.log(merge([2, 0], 1, [1], 1));
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
