/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let result = "";
  let carry = 0;
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i]);
    if (j >= 0) sum += parseInt(b[j]);

    result = (sum % 2) + result;
    carry = sum > 1 ? 1 : 0;
    i--;
    j--;
  }

  return result;
};

console.log(addBinary("1", "111"));
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
