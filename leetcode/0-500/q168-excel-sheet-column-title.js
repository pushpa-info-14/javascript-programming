/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    let remainder = (columnNumber - 1) % 26;
    columnNumber = Math.floor((columnNumber - 1) / 26);

    result = String.fromCharCode(remainder + "A".charCodeAt(0)) + result;
  }
  return result;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
