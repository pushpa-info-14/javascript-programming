/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  let result = 0;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const pow = mid * mid;
    if (pow > x) {
      right = mid - 1;
    } else if (pow < x) {
      left = mid + 1;
      result = mid;
    } else {
      return mid;
    }
  }

  return result;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(10));
