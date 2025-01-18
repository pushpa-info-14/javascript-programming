/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const direction = [
    [0, 1], // 1
    [0, -1], // 2
    [1, 0], // 3
    [-1, 0], // 4
  ];
  const rows = grid.length;
  const columns = grid[0].length;
  let r = 0;
  let c = 0;
  let cost = 0;
  const queue = [[0, 0, 0]];
  const minCost = {};
  minCost["0,0"] = 0;

  const getMinCost = (index) => minCost[index] ?? Infinity;

  while (queue.length > 0) {
    console.log(queue);
    [r, c, cost] = queue.shift();

    if (r === rows - 1 && c === columns - 1) {
      return cost;
    }

    for (let i = 0; i < direction.length; i++) {
      let dr, dc;
      [dr, dc] = direction[i];
      let nr = r + dr;
      let nc = c + dc;
      let nCost = i === grid[r][c] - 1 ? cost : cost + 1;

      if (
        nr < 0 ||
        nc < 0 ||
        nr === rows ||
        nc === columns ||
        nCost >= getMinCost(nr + "," + nc)
      ) {
        continue;
      }

      minCost[nr + "," + nc] = nCost;

      if (i === grid[r][c] - 1) {
        queue.unshift([nr, nc, nCost]);
      } else {
        queue.push([nr, nc, nCost]);
      }
    }
  }
};

// console.log(
//   minCost([
//     [1, 1, 1, 1],
//     [2, 2, 2, 2],
//     [1, 1, 1, 1],
//     [2, 2, 2, 2],
//   ])
// );

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
