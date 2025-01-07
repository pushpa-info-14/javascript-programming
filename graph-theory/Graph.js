export default class Graph {
  constructor(numNodes) {
    this.matrix = [];
    this.length = numNodes;
    for (let i = 0; i < numNodes; i++) {
      this.matrix.push(new Array(numNodes).fill(0));
    }
  }
  addEdge(fromNode, toNodes) {
    for (let toNode of toNodes) {
      this.matrix[fromNode][toNode] = 1;
      this.matrix[toNode][fromNode] = 1;
    }
  }
  removeEdge(fromNode, toNode) {
    this.matrix[fromNode][toNode] = 0;
    this.matrix[toNode][fromNode] = 0;
  }
  isEdge(fromNode, toNode) {
    return this.matrix[fromNode][toNode] === 1;
  }
  neighbors(fromNode) {
    const resut = [];
    for (let i = 0; i < this.matrix.length; i++) {
      if (this.matrix[fromNode][i] === 1) resut.push(i);
    }
    return resut;
  }
}
