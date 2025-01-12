var generate = function (numRows) {
  if (numRows == 1) return [[1]];

  const table = Array(numRows)
    .fill()
    .map(() => []);

  table[0] = [1];
  table[1] = [1, 1];

  for (let i = 2; i < numRows; i++) {
    const array = [1];
    for (let j = 0; j < table[i - 1].length - 1; j++) {
      array.push(table[i - 1][j] + table[i - 1][j + 1]);
    }
    array.push(1);
    table[i] = array;
  }

  return table;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(5));
console.log(generate(6));
