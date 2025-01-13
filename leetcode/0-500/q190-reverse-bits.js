/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    let bit = (n >> i) & 1;
    result = (bit << (31 - i)) | result;
  }
  return result;
};

console.log(reverseBits(43261596));
