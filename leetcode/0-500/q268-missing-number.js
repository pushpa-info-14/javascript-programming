/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  let expectedSum = nums.length * ((nums.length + 1) / 2);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return expectedSum - sum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
