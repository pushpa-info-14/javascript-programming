/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    result +=
      (columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1) *
      26 ** (columnTitle.length - 1 - i);
  }

  return result;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
