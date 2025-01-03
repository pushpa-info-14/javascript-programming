/**
 * Trees
 * - Hierarchical linked data structure
 * - Has 0 or 1 root with 0 or more subtrees
 * - Each node has 1 parent and 0 or more childs
 *
 * Binary Tree
 * - All tree rules
 * - Each nod points from o to 2 child nodes
 *
 * Binary Search Tree (BST)
 * - All binary tree rules
 * - Node's key is >= than all keys in it's left subtree
 * - Node's key is <= than all keys in it's right subtree
 * - Always try to create a balanced tree
 *
 * BST - Traversal
 * - Pre-Order (root, left, right)
 * - In-Order (left, root, right)
 * - Post-Order (left, right, root)
 * - Level-Order (Breadth-First Search)
 */

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }
}

inOrderTraversal = (root) => {
  if (root === null) {
    return [];
  }

  const result = [];
  if (root.left !== null) {
    result.push(...inOrderTraversal(root.left));
  }
  result.push(root.data);
  if (root.right !== null) {
    result.push(...inOrderTraversal(root.right));
  }
  return result;
};

levelOrderTraversal = (root) => {
  const result = [];
  const queue = [root];
  const visited = {};

  while (queue.length) {
    let current = queue.shift();
    if (visited[current.data]) continue;

    visited[current.data] = true;
    result.push(current.data);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return result;
};

const tree = new BST();
console.log(tree);
tree.insert(50);
tree.insert(31);
tree.insert(68);
tree.insert(35);
tree.insert(51);
tree.insert(99);

console.log(inOrderTraversal(tree.root));
console.log(levelOrderTraversal(tree.root));
