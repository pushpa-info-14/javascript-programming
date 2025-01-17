/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};

  for (let num of nums) {
    if (num in map) {
      return true;
    } else {
      map[num] = true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
