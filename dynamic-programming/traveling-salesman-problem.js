const tsp = (start, adjacency) => {
  const nodes = [];

  for (let i = 1; i < adjacency.length; i++) {
    nodes.push(i);
  }

  // i = starting vertex
  // s = set of vertexes salesman should visit after
  const dfs = (i, s) => {
    if (s.length == 0) {
      return adjacency[i][start];
    }

    let result = Infinity;
    for (let j = 0; j < s.length; j++) {
      let t = s.filter((element) => {
        return element !== s[j];
      });
      result = Math.min(result, adjacency[i][s[j]] + dfs(s[j], t));
      // console.log("result", result);
    }

    return result;
  };

  return dfs(start, nodes);
};

const adjacencyMatrix = [
  [0, 16, 11, 6],
  [8, 0, 13, 16],
  [4, 7, 0, 9],
  [5, 12, 2, 0],
];

// console.log(adjacencyMatrix);
console.log(tsp(0, adjacencyMatrix));
// console.log(tsp(1, adjacencyMatrix));
// console.log(tsp(2, adjacencyMatrix));
// console.log(tsp(3, adjacencyMatrix));

const am2 = [
  [0, 20, 30, 10, 11],
  [15, 0, 16, 4, 2],
  [3, 5, 0, 2, 4],
  [19, 6, 18, 0, 3],
  [16, 4, 7, 16, 0],
];

console.log(tsp(0, am2));
