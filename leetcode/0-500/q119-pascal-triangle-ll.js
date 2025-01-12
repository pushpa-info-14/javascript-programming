/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const table = Array(rowIndex + 1)
    .fill()
    .map(() => []);

  table[0] = [1];
  table[1] = [1, 1];

  for (let i = 2; i <= rowIndex; i++) {
    const array = [1];
    for (let j = 0; j < table[i - 1].length - 1; j++) {
      array.push(table[i - 1][j] + table[i - 1][j + 1]);
    }
    array.push(1);
    table[i] = array;
  }

  return table[rowIndex];
};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(5));
console.log(getRow(6));
