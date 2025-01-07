/**
 * Depth First Search
 *
 * The Depth First Search (DFS) is the most fundamental search algorithm
 * used to explore nodes and edges of a graph. It runs with a time
 * complexity of O(V+E) and is offen used as a building block in other
 * algorithms.
 *
 * By itself the DFS isn't all that useful, but when augmented to
 * perform other tasks such as
 *  - count connected components
 *  - determine connectivity
 *  - or find bridges/articulation points then DFS really shines.
 *
 * As the name suggests, a DFS plunges depth first into a graph
 * without regard for which edge it takes next until it cannot
 * go any further at whcih point it backtracks and continues.
 *
 * Connected Components
 *
 * Sometimes a graph is split into multiple components. It's useful
 * to be abale to identify and count these components.
 *
 * We can use DFS to identify components. First, make sure all the
 * nodes are labeled from [0, n] where n is the number of nodes.
 *
 * Algorithm: Start a DFS at every node (except if it's already been
 * visited) and mark all reachable nodes being part of the same component.
 *
 * What else can DFS do?
 *
 * We can augment the DFS algorithm to:
 * -- Compute a graph's minmum spanning tree.
 * -- Detect and find cycles in graph.
 * -- Check if a graph is bipartite.
 * -- Find strongly connected components.
 * -- Topologically sort the nodes of a graph.
 * -- Find bridges and articulation points.
 * -- Find augmenting paths in a flow network.
 * -- Generate mazes.
 */

function findComponents(graph) {
  const n = graph.length;
  let count = 0;
  const components = Array(n).fill(0);
  const visited = {};

  for (let i = 0; i < n; i++) {
    if (i in visited) continue;
    count++;
    dfs(i);
  }

  function dfs(at) {
    visited[at] = true;
    components[at] = count;
    for (let neighbor of graph.neighbors(at)) {
      if (neighbor in visited) continue;
      dfs(neighbor);
    }
  }

  return [count, components];
}

import Graph from "./Graph.js";

let g = new Graph(18);
g.addEdge(0, [4, 8, 14, 13]);
g.addEdge(4, [0, 8]);
g.addEdge(8, [4, 0, 14]);
g.addEdge(14, [8, 0, 13]);
g.addEdge(13, [0, 14]);

g.addEdge(15, [9, 2, 10]);
g.addEdge(10, [15]);
g.addEdge(2, [15, 9]);
g.addEdge(15, [9, 2, 10]);
g.addEdge(9, [3, 2, 15]);
g.addEdge(3, [9, 2]);

g.addEdge(1, [5]);
g.addEdge(16, [5]);
g.addEdge(17, [5]);
g.addEdge(5, [1, 16, 17]);

g.addEdge(6, [11, 7]);
g.addEdge(7, [6, 11]);
g.addEdge(11, [6, 7]);

console.log(findComponents(g));
