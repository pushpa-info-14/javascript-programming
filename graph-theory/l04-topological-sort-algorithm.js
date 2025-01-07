/**
 * Many real world situations can be modelled
 * as a graph with directed edges where some
 * events must occur before others.
 *
 * -- School class prerequisites
 * -- Program dependencies
 * -- Event scheduling
 * -- Assembly instructions
 *
 * A topological ordering is an ordering  of the nodes in a directed
 * graph where for each directed edge from node A to node B, node A
 * apperars before node B in the ordering.
 *
 * The topological sort algorithm can find a
 * topological ordering in O(V+E) time!
 *
 * NOTE: Topological orderings are NOT unique.
 *
 * Not every graph can have a topological ordering.
 * A graph which contains a cycle cannot have a vaid ordering.
 *
 * The only type of graph which has a valid topological
 * ordering is a Directed Acyclic Graph (DAG). These are
 * graphs with directed edges and no cycles.
 *
 * Q: How do I verify that my graph does not contain
 *    a directed cycle?
 * A: One method is to use Tarjan's strongly connected
 *    component algorithm which can be used to find these cycles.
 * B: By definition, all rooted trees have a topological ordering
 *    since they do not contain any clycles.
 *
 * Topological Sort Algorithm
 *
 * 1. Pick an unvisited node
 * 2. Beginning with the selected node, do a Depth First Search (DFS)
 *    exploring only unvisited nodes.
 * 3. On the recursive callback of the DFS, add the current node to
 *    the topological ordering in reverse order.
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
    for (let neighbor of graph.neighbors(i)) {
      if (neighbor in visited) continue;
      dfs(neighbor, visited, visitedNodes, graph);
    }
    visitedNodes.push(i);
  }

  return order;
}

import Graph from "./Graph.js";

let map = {};
let nodes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
for (let i = 0; i < nodes.length; i++) {
  map[nodes[i]] = i;
}

let g = new Graph(nodes.length);
g.addEdge(map["A"], [map["D"]]);
g.addEdge(map["B"], [map["D"]]);
g.addEdge(map["C"], [map["B"]]);
g.addEdge(map["D"], [map["G"], map["H"]]);
g.addEdge(map["E"], [map["A"], map["D"], map["F"]]);
g.addEdge(map["F"], [map["J"], map["K"]]);
g.addEdge(map["G"], [map["I"]]);
g.addEdge(map["H"], [map["I"], map["J"]]);
g.addEdge(map["I"], [map["L"]]);
g.addEdge(map["J"], [map["L"], map["M"]]);
g.addEdge(map["K"], [map["J"]]);

const result = topologicalSort(g);
const a = [];
for (let i of result) {
  a.push(nodes[i]);
}
console.log(a.join(","));
