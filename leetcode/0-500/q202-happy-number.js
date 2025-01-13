/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {};
  while (!map[n]) {
    map[n] = true;

    let result = 0;
    let tempN = n;
    while (tempN) {
      result += Math.pow(tempN % 10, 2);
      tempN = Math.floor(tempN / 10);
    }

    n = result;
  }

  if (n === 1) {
    return true;
  } else {
    return false;
  }
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
console.log(isHappy(1999999999));
