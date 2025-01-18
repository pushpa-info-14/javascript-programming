/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  const cost = Array(m)
    .fill()
    .map(() => Array(n).fill(Infinity));

  const isValid = (x, y) => x >= 0 && y >= 0 && x < m && y < n;

  queue.push([0, 0]);
  cost[0][0] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const newX = x + directions[i][0];
      const newY = y + directions[i][1];
      const newCost = cost[x][y] + (grid[x][y] === i + 1 ? 0 : 1);

      if (isValid(newX, newY) && newCost < cost[newX][newY]) {
        cost[newX][newY] = newCost;
        if (grid[x][y] === i + 1) {
          queue.unshift([newX, newY]);
        } else {
          queue.push([newX, newY]);
        }
      }
    }
  }

  return cost[m - 1][n - 1];
};

console.log(
  minCost([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
  ])
);

console.log(
  minCost([
    [1, 2],
    [4, 3],
  ])
);

console.log(
  minCost([
    [1, 2],
    [4, 4],
    [4, 4],
  ])
);

console.log(
  minCost([
    [3, 4, 3],
    [2, 2, 2],
    [2, 1, 1],
    [4, 3, 2],
    [2, 1, 4],
    [2, 4, 1],
    [3, 3, 3],
    [1, 4, 2],
    [2, 2, 1],
    [2, 1, 1],
    [3, 3, 1],
    [4, 1, 4],
    [2, 1, 4],
    [3, 2, 2],
    [3, 3, 1],
    [4, 4, 1],
    [1, 2, 2],
    [1, 1, 1],
    [1, 3, 4],
    [1, 2, 1],
    [2, 2, 4],
    [2, 1, 3],
    [1, 2, 1],
    [4, 3, 2],
    [3, 3, 4],
    [2, 2, 1],
    [3, 4, 3],
    [4, 2, 3],
    [4, 4, 4],
  ])
);
