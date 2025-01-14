/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0 || n < 0) return false;
  while (true) {
    if (n === 1) return true;
    if (n % 2 === 1) return false;

    n = Math.floor(n / 2);
  }
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(-16));
console.log(isPowerOfTwo(3));
