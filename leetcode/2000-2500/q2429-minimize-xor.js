/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  function countBits(n) {
    let result = 0;
    while (n > 0) {
      n = n & (n - 1);
      result++;
    }

    return result;
  }

  let count1 = countBits(num1);
  let count2 = countBits(num2);

  let x = num1;
  let i = 0;

  // Remove least significant
  while (count1 > count2) {
    if (x & (1 << i)) {
      count1 -= 1;
      x = x ^ (1 << i);
    }
    i += 1;
  }

  // Add least significant
  while (count1 < count2) {
    if ((x & (1 << i)) === 0) {
      count1 += 1;
      x = x | (1 << i);
    }
    i += 1;
  }
  return x;
};

console.log(minimizeXor(3, 5));
console.log(minimizeXor(1, 12));
console.log(minimizeXor(13, 12));
