/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const queue = [];

  queue.push(root.left);
  queue.push(root.right);

  while (queue.length > 0) {
    let node1 = queue.shift();
    let node2 = queue.shift();
    console.log(node1, node2);
    if (node1 === null && node2 === null) continue;
    if (node1 === null) return false;
    if (node2 === null) return false;

    if (node1.val !== node2.val) return false;

    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }

  return true;
};

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

let root2 = new TreeNode(
  2,
  new TreeNode(3, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(5))
);

let root3 = new TreeNode(
  2,
  new TreeNode(3, new TreeNode(4)),
  new TreeNode(3, new TreeNode(5), new TreeNode(4))
);

//console.log(isSymmetric(root));
//console.log(isSymmetric(root2));
console.log(isSymmetric(root3));
