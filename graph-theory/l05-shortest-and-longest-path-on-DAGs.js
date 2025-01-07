/**
 * Recall that a Directed Acyclic Graph (DAG) is a graph
 * with directed edges and no cycles. By definition this
 * means all trees are automatically DAGs since they do
 * not contain cycles. But must be directed.
 *
 * SSSP on DAG
 *
 * The Single Source Shortest Path (SSSP) problem can be
 * solved efficiently on a DAG in O(V+E) time. This is due
 * to fact that the nodes can be ordered in a topological
 * ordering via topsort and processed sequentially.
 *
 * Longest path on DAG
 *
 * What about longest path? On a general graph this problem
 * is NP-Hard, but on a DAG this problem is solvable in O(V+E)!
 *
 * The trick is to multiply all edge values by -1 then find the
 * shortest path and then multiply the edge values by -1 again!
 */

function topologicalSort(graph) {
  const n = graph.length;
  const visited = {};
  const order = Array(n).fill(0);
  let orderIndex = n - 1;

  for (let i = 0; i < n; i++) {
    if (i in visited) continue;

    let visitedNodes = [];
    dfs(i, visited, visitedNodes, graph);
    for (let visitedNode of visitedNodes) {
      order[orderIndex] = visitedNode;
      orderIndex--;
    }
  }

  function dfs(i, visited, visitedNodes, graph) {
    visited[i] = true;
    for (let edge of graph.map[i]) {
      if (edge[0] in visited) continue;
      dfs(edge[0], visited, visitedNodes, graph);
    }
    visitedNodes.push(i);
  }

  return order;
}

function dagShortestPath(graph, start) {
  const topsort = topologicalSort(graph);
  const dist = Array(topsort.length).fill(Infinity);
  dist[start] = 0;

  for (let i = 0; i < topsort.length; i++) {
    const nodeIndex = topsort[i];
    let edges = graph.map[nodeIndex];
    for (let edge of edges) {
      let newDist = dist[nodeIndex] + edge[1];
      dist[edge[0]] = Math.min(dist[edge[0]], newDist);
    }
  }
  return dist;
}

import GraphW from "./GraphW.js";

let map = {};
let nodes = ["A", "B", "C", "D", "E", "F", "G", "H"];
for (let i = 0; i < nodes.length; i++) {
  map[nodes[i]] = i;
}

let g = new GraphW(nodes.length);
g.addEdge(map["A"], map["B"], 3);
g.addEdge(map["A"], map["C"], 6);
g.addEdge(map["B"], map["C"], 4);
g.addEdge(map["B"], map["D"], 4);
g.addEdge(map["B"], map["E"], 11);
g.addEdge(map["C"], map["D"], 8);
g.addEdge(map["C"], map["G"], 11);
g.addEdge(map["D"], map["E"], -4);
g.addEdge(map["D"], map["F"], 5);
g.addEdge(map["D"], map["G"], 2);
g.addEdge(map["E"], map["H"], 9);
g.addEdge(map["F"], map["H"], 1);
g.addEdge(map["G"], map["H"], 2);

console.log(dagShortestPath(g, 0));
