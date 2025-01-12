/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};

  for (let num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }

  for (let key of Object.keys(map)) {
    if (map[key] > nums.length / 2) {
      return parseInt(key);
    }
  }
};

var majorityElement2 = function (nums) {
  let item = 0;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      item = num;
    }

    if (num === item) {
      count++;
    } else {
      count--;
    }
  }
  return item;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement2([3, 2, 3]));
