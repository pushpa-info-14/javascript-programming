export default class GraphW {
  constructor(numNodes) {
    this.map = {};
    this.length = numNodes;
    for (let i = 0; i < numNodes; i++) {
      this.map[i] = [];
    }
  }
  addEdge(source, destination, distance) {
    this.map[source].push([destination, distance]);
  }
}
