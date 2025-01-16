/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let result = 0;

  let n = nums1.length;
  let m = nums2.length;

  if (m % 2 === 1) {
    for (let i = 0; i < n; i++) {
      result ^= nums1[i];
    }
  }

  if (n % 2 === 1) {
    for (let i = 0; i < m; i++) {
      result ^= nums2[i];
    }
  }
  return result;
};

console.log(xorAllNums([2, 1, 3], [10, 2, 5, 0]));
